# Mini CRM System

A modern Mini Customer Relationship Management (CRM) System developed as part of the **BDKRISHI Technical Practical Assignment**. The application enables administrators and staff members to manage daily tasks efficiently through a secure authentication system and an intuitive dashboard.

---
Server Link: https://mini-crm-server-kk37.onrender.com </br>
Live link: https://mini-crm-two-pied.vercel.app/ </br>
presentaion Video: https://drive.google.com/file/d/1qpnVxYR7VCeIdvIBzD_XdyvuVsYN3KTt/view?usp=sharing

## Project Overview

The Mini CRM System is designed to demonstrate practical full-stack development skills including authentication, task management, REST API development, responsive UI design, and database integration.

---

## Features

### Authentication
- User Registration
- User Login
- Secure Logout
- Password Encryption (Better Auth)
- Role Management (Admin & Staff)

### Task Management
- Create Task
- View All Tasks
- Update Task
- Delete Task
- Search Tasks
- Pagination
- Priority Management
- Status Management

### Dashboard
- Responsive Dashboard
- Sidebar Navigation
- Top Navigation Bar
- Task Table
- Toast Notifications
- Responsive Design

---

## Technology Stack

### Frontend
- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- HeroUI
- React Toastify

### Backend
- Express.js
- Node.js

### Database
- MongoDB

### Authentication
- Better Auth

---


## REST API

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create task |
| PATCH | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

## Task Fields

- Task Name
- Assigned To
- Due Date
- Priority
- Status
- Description

### Priority

- High
- Medium
- Low

### Status

- Pending
- In Progress
- Completed

---

## Search

Search tasks by task name.

Example

```
/api/tasks?search=meeting
```

---

## Pagination

Example

```
/api/tasks?page=1&limit=5
```

---


## Author

**Foysal Jaman**


- LinkedIn: https://www.linkedin.com/in/foysaljaman007/
- Email: mdfoysal.mf33@gmail.com

---

## License

This project was developed for the **BDKRISHI Technical Practical Assignment**.
