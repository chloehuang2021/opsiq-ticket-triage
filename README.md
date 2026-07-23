# OpsIQ Ticket Triage

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

Frontend
https://opsiq-ticket-triage.onrender.com

Backend API
https://opsiq-ticket-triage-backend.onrender.com

🚀🎥 Demo Video:
https://youtu.be/LJh7dDF6jPY

## Overview

OpsIQ simulates a modern enterprise IT ticketing system.
Incoming support requests are automatically analyzed using an LLM, categorized, prioritized, summarized, and enriched with suggested troubleshooting steps before being stored in PostgreSQL.
The application demonstrates full-stack development, REST API design, AI integration, containerization, and cloud deployment.

--
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

```

            HTTP
┌────────────────────────┐
│    Angular Frontend    │
└────────────┬───────────┘
             │
             ▼
┌────────────────────────┐
│ Spring Boot Backend    │
│ (Docker Container)     │
└────────────┬───────────┘
             │
       Spring Data JPA
             │
             ▼
┌────────────────────────┐
│ PostgreSQL             │
│ (Docker Container)     │
└────────────────────────┘
```

## Docker Support

The backend application is fully containerized using Docker and Docker Compose for simplified local development and deployment.

### Prerequisites

* Docker Desktop
* Docker Compose

### Start the Backend and Database

```bash
docker compose up -d --build
```

This command will:

* Build the Spring Boot backend image
* Start a PostgreSQL container
* Start the backend container
* Automatically connect the backend to the PostgreSQL database

### Verify the API

```bash
curl http://localhost:8080/api/tickets
```

Expected response:

```json
[]
```

### Stop the Application

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

### DevOps

* Docker
* Docker Compose

### Deployment

* Dockerized the Spring Boot backend using Docker
* Orchestrated the backend and PostgreSQL services with Docker Compose
* Configured environment-based database connection using Docker environment variables
* Enabled one-command local deployment with `docker compose up -d --build`



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
* Integrate a production LLM API for AI-powered ticket analysis
* Containerize the Angular frontend
* AWS deployment
* Advanced AI integration
* Implement user authentication and authorization
* Add ticket assignment and workflow management
* Support file attachments and comments


## Author

Weiyi "Chloe" Huang


