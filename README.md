# OpsIQ AI Ticket Triage

A full-stack ticket management application with AI-powered functions that automatically categorize support requests, assign priorities, generate concise summaries, and recommend troubleshooting steps.

Built with Angular, Spring Boot, PostgreSQL, Docker, and OpenRouter.

![Angular](https://img.shields.io/badge/Angular-v21-DD0031?logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-17-007396?logo=openjdk&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?logo=render&logoColor=black)
![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-7C3AED)


## Live Demo

- **Frontend:** https://your-frontend-url.onrender.com
- **Backend API:** https://your-backend-url.onrender.com
- Demo Video: https://youtu.be/LJh7dDF6jPY

## Source Code

| Component | Repository |
|----------|------------|
| Frontend (Angular) | https://github.com/yourusername/opsiq-ticket-triage-frontend |
| Backend (Spring Boot) | https://github.com/yourusername/opsiq-ticket-triage-backend |



## Overview

OpsIQ simulates a modern enterprise IT ticketing system.
Incoming support requests are automatically analyzed using an LLM, categorized, prioritized, summarized, and enriched with suggested troubleshooting steps before being stored in PostgreSQL.
The application demonstrates full-stack development, REST API design, AI integration, containerization, and cloud deployment.


## Related Repositories

* Frontend:
https://github.com/chloehuang2021/opsiq-ticket-triage

* Backend:
https://github.com/chloehuang2021/opsiq-ticket-triage-backend

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
#### Before Creating a Ticket
<img width="2880" height="1806" alt="New UI Overview" src="https://github.com/user-attachments/assets/aecbe6f1-aabd-411a-a17e-2a3f49c3422e" />



#### How to Create a New Ticket 

<img width="2876" height="1802" alt="ticket preview 1 After evening" src="https://github.com/user-attachments/assets/3d9949d8-5f77-4569-97e7-9e31e7d36f18" />



#### AI Analysis 

<img width="2876" height="1806" alt="ticket preview 2 After evening" src="https://github.com/user-attachments/assets/73610e0f-4970-431d-af02-710a38953863" />

#### Dashboard 


<img width="936" height="198" alt="Dashboard" src="https://github.com/user-attachments/assets/85b705b5-0ead-4e81-ba72-614dad96ca07" />




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

- Integrate a production-grade LLM for enhanced ticket analysis
- Containerize the Angular frontend
- Deploy the application to AWS
- Implement a CI/CD pipeline
- Add user authentication and role-based authorization
- Support ticket assignment and workflow management
- Add file attachments and comments
- Enable email notifications for ticket updates


## Author

Weiyi "Chloe" Huang


