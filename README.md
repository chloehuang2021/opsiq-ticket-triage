# OpsIQ AI Ticket Triage

A full-stack ticket management application with AI-powered functions that automatically categorize requests, assign priorities, generate summaries, show status, suggest troubleshooting steps, and show ticket created time & last updated time.
Incoming support requests are automatically analyzed using AI (Large Language Model / LLM). All ticket information are stored in PostgreSQL.

The application demonstrates full-stack development, REST API design, AI/LLM integration, containerization, and cloud deployment.


Built with Angular, Spring Boot, PostgreSQL, Docker, and OpenRouter.

![Angular](https://img.shields.io/badge/Angular-v21-DD0031?logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-17-007396?logo=openjdk&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?logo=render&logoColor=black)
![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-7C3AED)





## Live Demo

- **Frontend:** https://opsiq-ticket-triage.onrender.com
- **Backend API:** https://opsiq-ticket-triage-backend.onrender.com
- **Demo Video:** https://youtu.be/LJh7dDF6jPY


## Repositories


| Component | Technology | Repository |
|-----------|------------|------------|
| Frontend | Angular | https://github.com/chloehuang2021/opsiq-ticket-triage |
| Backend | Spring Boot | https://github.com/chloehuang2021/opsiq-ticket-triage-backend |



## Tech Stack


| Category | Technology |
|----------|------------|
| Frontend | Angular, TypeScript, HTML, CSS |
| Backend | Spring Boot, Java, RESTful API |
| Database | PostgreSQL, Spring Data JPA |
| Containerization | Docker, Docker Compose |
| AI Integration | OpenRouter API, DeepSeek Chat V3 |
| Deployment | Render |
| Version Control | Git, GitHub |


## Features

### AI-Powered Ticket Analysis

- Automatically categorize IT support tickets
- Assign priority levels (High, Medium, Low)
- Generate concise ticket summaries
- Recommend troubleshooting and resolution steps
- Handle AI service failures with automatic fallback values

### Ticket Management

- Create, view, update, and delete support tickets
- Track ticket status throughout its lifecycle

### Search and Organization

- Search tickets by title
- Filter tickets by status
- Sort tickets by priority or creation date

### Dashboard

- View ticket status metrics at a glance
- Monitor total, Open, In Progress, and Resolved ticket counts

### Audit Tracking

- Automatically record creation and last updated timestamps





## Architecture


<img width="1774" height="887" alt="Architecture" src="https://github.com/user-attachments/assets/5525a53c-d9b7-406e-bdad-609d64e8f669" />







## Screenshots
#### Default View
<img width="2880" height="1806" alt="New UI Overview" src="https://github.com/user-attachments/assets/aecbe6f1-aabd-411a-a17e-2a3f49c3422e" />



#### Create Ticket

<img width="2880" height="1806" alt="New UI new ticket" src="https://github.com/user-attachments/assets/4e26e849-154a-44df-8250-d062bacc77ad" />

#### Right After Creating a Ticket
<img width="2880" height="1808" alt="New UI new ticket after saved" src="https://github.com/user-attachments/assets/6007f566-66b2-4f54-9eff-a580f516903e" />




#### AI Analysis 
<img width="2880" height="1600" alt="New UI AI Analysis" src="https://github.com/user-attachments/assets/1ae711d9-48c7-4bfb-bbdf-c8e76c8235cd" />






#### Dashboard 

<img width="2688" height="590" alt="New UI Dashboard" src="https://github.com/user-attachments/assets/ec521ae6-170a-4b86-b89f-06b3253eb140" />

#### Saved Tickets

<img width="2880" height="1804" alt="New UI Saved Tickets" src="https://github.com/user-attachments/assets/9de988e4-46ff-4c1c-8f4c-45247dc6ceef" />



#### Ticket Management with Newest First Sorting 

<img width="2880" height="1864" alt="ticket preview 3 After evening" src="https://github.com/user-attachments/assets/b0babd44-de69-46a6-9e9d-e42d085b26a7" />

#### Ticket Management with Keyword Searching & Oldest First Sorting 

<img width="2880" height="1804" alt="ticket preview 4 After evening" src="https://github.com/user-attachments/assets/0e51aa73-6504-4d14-aafd-47e495c1dc0b" />










--------------------------------
## Docker Support

The backend application is fully containerized using Docker and Docker Compose for simplified local development and deployment.

### Prerequisites

* Docker Desktop
* Docker Compose

### Start the Backend and Database

```bash
docker compose up -d --build
```

After the containers have started, the backend API will be available at:

```text
http://localhost:8081
```

This command will:

* Build the Spring Boot backend image
* Start a PostgreSQL container
* Start the backend container
* Automatically connect the backend to the PostgreSQL database

  
### Services

| Service | Host Port | Container Port |
|----------|----------:|---------------:|
| Spring Boot Backend | 8081 | 8080 |
| PostgreSQL | 5432 | 5432 |

### Verify the API

```bash
curl http://localhost:8081/api/tickets
```

Expected response:

```json
[]
```

### Stop the Services

```bash
docker compose down
```

### Docker Architecture

```
┌───────────────────────┐
│ Spring Boot Backend   │
│   Docker Container    │
└──────────┬────────────┘
           │
     Docker Network
           │
┌──────────▼────────────┐
│ PostgreSQL Container  │
└───────────────────────┘
```

### Highlights
- Containerized Spring Boot backend
- PostgreSQL database container
- Docker Compose orchestration
- Environment-based configuration
- One-command local deployment



### Deployment

- Containerized the Spring Boot backend using Docker
- Orchestrated the backend and PostgreSQL services with Docker Compose
- Configured environment-based database connections using environment variables
- Enabled one-command local deployment with `docker compose up -d --build`


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

- Containerize the Angular frontend
- Deploy the application to AWS
- Implement a CI/CD pipeline
- Add user authentication and role-based authorization
- Support ticket assignment and workflow management
- Add file attachments and comments
- Enable email notifications for ticket updates


## Author

Weiyi "Chloe" Huang





