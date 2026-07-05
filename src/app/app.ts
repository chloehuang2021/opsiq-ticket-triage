import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Centralize API endpoints to avoid scattered environment-specific changes.
  private readonly ticketApiUrl = 'http://localhost:8081/api/tickets';
  private readonly aiApiUrl = 'http://localhost:8081/api/ai/analyze';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTickets();
  }

  title = '';
  description = '';
  department = '';
  category = '';
  priority = '';
  summary = '';
  suggestedSteps = '';
  tickets: any[] = [];
  message = '';
  isSaving = false;
  selectedStatus = 'ALL';
  searchText = '';
  sortOption = 'newest';

  analyzeTicket() {
    const ticket = {
      title: this.title,
      description: this.description,
      department: this.department,
      status: 'OPEN',
    };

    this.http
      .post<any>(this.aiApiUrl, ticket)
      .subscribe((response) => {
        this.category = response.category;
        this.priority = response.priority;
        this.summary = response.summary;
        this.suggestedSteps = response.suggestedSteps;
      });
  }

  saveTicket() {
    const ticket = {
      title: this.title,
      description: this.description,
      department: this.department,
      status: 'OPEN',
    };

    this.isSaving = true;
    this.message = 'Analyzing ticket...';

    this.http.post<any>(this.ticketApiUrl, ticket).subscribe({
      next: (response) => {
        this.message = `Ticket saved with ID: ${response.id}`;
        this.loadTickets();

        // Reset the form so the next ticket starts from a clean state.
        this.title = '';
        this.description = '';
        this.department = '';
      },
      error: () => {
        this.message = 'Unable to save ticket. Please try again.';
      },
      
      // Restore the button state regardless of the request outcome.
      complete: () => {
        this.isSaving = false;
      },
    });
  }

  loadTickets() {
    this.http.get<any[]>(this.ticketApiUrl).subscribe((response) => {
      console.log('Loaded tickets:', response);
      this.tickets = response;
    });
  }


  deleteTicket(id: number) {
    this.http.delete(`${this.ticketApiUrl}/${id}`).subscribe(() => {
      this.message = `Ticket ${id} deleted successfully`;
      this.tickets = this.tickets.filter((ticket) => ticket.id !== id);
    });
  }

  updateStatus(id: number, status: string) {
    this.http.patch<any>(`${this.ticketApiUrl}/${id}/status`, { status }).subscribe((response) => {
      this.message = `Ticket ${id} updated to ${response.status}`;
      this.loadTickets();
    });
  }

  //Ticket Status Filter Function：Allow users to filter tickets by status
  get filteredTickets() {
    return this.tickets.filter((ticket) => {
      const statusMatch = this.selectedStatus === 'ALL' || ticket.status === this.selectedStatus;

      const searchMatch = ticket.title.toLowerCase().includes(this.searchText.toLowerCase());

      return statusMatch && searchMatch;
    });
  }

  //Ticket Sorting Function: Allow users to sort tickets by date or priority
  get sortedTickets() {
    const tickets = [...this.filteredTickets];

    if (this.sortOption === 'newest') {
      return tickets.sort((a, b) => b.id - a.id);
    }

    if (this.sortOption === 'oldest') {
      return tickets.sort((a, b) => a.id - b.id);
    }

    const priorityOrder: any = {
      HIGH: 3,
      MEDIUM: 2,
      LOW: 1,
    };

    if (this.sortOption === 'priorityHigh') {
      return tickets.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    }

    if (this.sortOption === 'priorityLow') {
      return tickets.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    return tickets;
  }

  //Building the dashboard
  get openCount() {
    return this.tickets.filter((ticket) => ticket.status === 'OPEN').length;
  }

  get inProgressCount() {
    return this.tickets.filter((ticket) => ticket.status === 'IN_PROGRESS').length;
  }

  get resolvedCount() {
    return this.tickets.filter((ticket) => ticket.status === 'RESOLVED').length;
  }

  get totalCount() {
    return this.tickets.length;
  }
}
