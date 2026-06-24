# OpsIQ Ticket Triage

A full-stack ticket management application with AI-powered ticket analysis, built using Angular, Spring Boot, and PostgreSQL.

The application automatically analyzes incoming support tickets, categorizes issues, assigns priority levels, generates summaries, and suggests resolution steps to streamline the ticket triage process.


# 🚀🎥 Demo Video:
https://youtu.be/LJh7dDF6jPY

---

## Screenshots

#### AI Analysis Screenshot
  
<img width="1988" height="1186" alt="image" src="https://github.com/user-attachments/assets/19882878-fe8c-4ad4-ae9a-1b6da727119e" />

#### Dashboard Screenshot
  
<img width="1252" height="268" alt="image" src="https://github.com/user-attachments/assets/2a1351e0-cd8d-403f-a498-5173ff118359" />

#### Ticket Management Screenshot

<img width="1830" height="1356" alt="image" src="https://github.com/user-attachments/assets/63cd2dfa-2428-4e62-bc37-a8e0f7996597" />


## Related Repositories

* Frontend:
https://github.com/chloehuang2021/opsiq-ticket-triage

* Backend:
https://github.com/chloehuang2021/opsiq-ticket-triage-backend

## Features

### AI-Powered Ticket Analysis

- Automatic ticket categorization
- Priority assignment (High, Medium, Low)
- Ticket summary generation
- Suggested resolution steps

### Ticket Management

- Create support tickets
- View all tickets
- Update ticket status
- Delete tickets

### Search, Filter, and Sort

- Search tickets by title
- Filter by status
- Sort by date
- Sort by priority

### Dashboard Metrics

- Total tickets
- Open tickets
- In Progress tickets
- Resolved tickets

### Audit Information

- Created timestamp
- Updated timestamp


## Architecture

```text
┌──────────────────┐
│ Angular Frontend │
└────────┬─────────┘
         │ HTTP
         ▼
┌──────────────────┐
│ Spring Boot API  │
└────────┬─────────┘
         │ JPA
         ▼
┌──────────────────┐
│   PostgreSQL     │
└──────────────────┘
```

## Tech Stack

### Frontend

* Angular
* TypeScript
* HTML/CSS

### Backend

* Spring Boot
* Java
* REST API

### Database

* PostgreSQL
* Spring Data JPA

## Current Functionality

* Create tickets
* Analyze tickets with AI rules engine
* Update ticket status
* Delete tickets
* Search tickets by title
* Filter tickets by status
* Dashboard statistics
* Automatic timestamp tracking

## API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/tickets` | Create a ticket |
| GET | `/api/tickets` | Retrieve all tickets |
| GET | `/api/tickets/{id}` | Retrieve a ticket by ID |
| PATCH | `/api/tickets/{id}/status` | Update ticket status |
| DELETE | `/api/tickets/{id}` | Delete a ticket |
| POST | `/api/tickets/analyze` | Analyze a ticket |



## Future Enhancements

* Docker support
* AWS deployment
* User authentication
* Advanced AI integration
* Ticket assignment workflow

## Author

Weiyi "Chloe" Huang
