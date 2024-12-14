# Task Management API

A robust RESTful API for managing tasks, built using **Node.js**, **Express**, and **MongoDB**. This project includes features such as task creation, updating, deletion, and fetching with user authentication powered by **JWT** middleware. The API supports dynamic updates for `title`, `description`, and `status` fields while ensuring secure access to protected routes.

---

## Features

- **User Authentication**: Secure routes using JSON Web Tokens (JWT).
- **CRUD Operations**: Create, read, update, and delete tasks seamlessly.
- **Dynamic Updates**: Update specific fields like `title`, `description`, or `status` without affecting other data.
- **Error Handling**: Comprehensive error responses for improved debugging.
- **Built-in Middleware**: Validation and authentication middleware for enhanced security.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)

---

## Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ashugupta1/Bytive-Technologies-Backend.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd <project-folder>
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the project root and configure the following:
   ```plaintext
   PORT=5000
   MONGO_URI = 'mongodb://localhost:27017/to_do_app'
   JWT_SECRET = 'My_Secret_key',
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Endpoint                  |      Description         |
|--------|-----------------------|--------------------------|
| POST   | `/api/signup`             | Signup and generate token|
| POST   | `/api/login`              | Authenticate user        |
| POST   | `/api/tasks`              | Create a new task        |
| GET    | `/api/tasks`              | Fetch all tasks          |
| GET    | `/api/tasks/:id`          | Fetch a specific task    |
| PUT    | `/api/tasks/:id`          | Update a specific task   |
| DELETE | `/api/tasks/:id`          | Delete a specific task   |

---

## Usage Instructions

### Authentication

**Signup**:

Send a POST request to `/api/signup` with the following example data:

**Request Body**:
```json
{
    "username": "ashu5361",
    "email": "ashu@gmail.com",
    "password": "123456"
}
```
**Response**:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWQzYjQ2MjQ2OTUzODIzZDlhYmI3MiIsImlhdCI6MTczNDE2MzI3MCwiZXhwIjoxNzM0MTY2ODcwfQ.3vEZL0oSaa73cIZmyZ75VY4xXyg2PuxP3AjHPJuta10"
}
```

Use the token generated in the response for authentication in subsequent requests. 

---

### Create a Task

**Endpoint**: `/api/tasks`  
**Method**: POST  
**Headers**:
```json
{
  "x-auth-token": "<your-token>",
  "Content-Type": "application/json"
}
```
**Request Body**:
```json
{
    "title": "Team Meeting Preparation",
    "description": "Prepare an agenda for the upcoming team meeting, including topics to discuss, time allocations, and desired outcomes.",
    "status": "Pending"
}
```
**Response**:
```json
{
    "_id": "1234567890",
    "title": "Team Meeting Preparation",
    "description": "Prepare an agenda for the upcoming team meeting, including topics to discuss, time allocations, and desired outcomes.",
    "status": "Pending",
    "createdAt": "2024-12-14T00:00:00.000Z",
    "updatedAt": "2024-12-14T00:00:00.000Z"
}
```

---

### Fetch All Tasks

**Endpoint**: `/api/tasks`  
**Method**: GET  
**Headers**:
```json
{
  "x-auth-token": "<your-token>"
}
```
**Response**:
```json
[
  {
    "_id": "1234567890",
    "title": "Team Meeting Preparation",
    "description": "Prepare an agenda for the upcoming team meeting, including topics to discuss, time allocations, and desired outcomes.",
    "status": "Pending",
    "createdAt": "2024-12-14T00:00:00.000Z",
    "updatedAt": "2024-12-14T00:00:00.000Z"
  }
]
```

---

### Fetch a Specific Task

**Endpoint**: `/api/tasks/:id`  
**Method**: GET  
**Headers**:
```json
{
  "x-auth-token": "<your-token>"
}
```
**Response**:
```json
{
    "_id": "1234567890",
    "title": "Team Meeting Preparation",
    "description": "Prepare an agenda for the upcoming team meeting, including topics to discuss, time allocations, and desired outcomes.",
    "status": "Pending",
    "createdAt": "2024-12-14T00:00:00.000Z",
    "updatedAt": "2024-12-14T00:00:00.000Z"
}
```

---

### Update a Task

**Endpoint**: `/api/tasks/:id`  
**Method**: PUT  
**Headers**:
```json
{
  "x-auth-token": "<your-token>",
  "Content-Type": "application/json"
}
```
**Request Body**:
```json
{
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "status": "Completed"
}
```
**Response**:
```json
{
    "_id": "1234567890",
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "status": "Completed",
    "createdAt": "2024-12-14T00:00:00.000Z",
    "updatedAt": "2024-12-14T01:00:00.000Z"
}
```

---

### Delete a Task

**Endpoint**: `/api/tasks/:id`  
**Method**: DELETE  
**Headers**:
```json
{
  "x-auth-token": "<your-token>"
}
```
**Response**:
```json
{
    "message": "Task deleted successfully"
}
```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.
