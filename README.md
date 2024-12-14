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
   git clone <repository-url>
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
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Endpoint             | Description              |
|--------|-----------------------|--------------------------|
| POST   | `/login`              | Authenticate user        |
| POST   | `/tasks`              | Create a new task        |
| GET    | `/tasks`              | Fetch all tasks          |
| GET    | `/tasks/:id`          | Fetch a specific task    |
| PUT    | `/tasks/:id`          | Update a specific task   |
| DELETE | `/tasks/:id`          | Delete a specific task   |

---

## Example Usage

### **Create a Task**

**Request**:
```http
POST /tasks
```
**Headers**:
```json
{
  "Content-Type": "application/json",
  "x-auth-token": "<JWT Token>"
}
```
**Body**:
```json
{
  "title": "Sample Task",
  "description": "This is a sample task",
  "status": "Pending"
}
```

**Response**:
```json
{
  "_id": "1234567890",
  "title": "Sample Task",
  "description": "This is a sample task",
  "status": "Pending",
  "createdAt": "2024-12-14T00:00:00.000Z",
  "updatedAt": "2024-12-14T00:00:00.000Z"
}
```

### **Update a Task**

**Request**:
```http
PUT /tasks/:id
```
**Headers**:
```json
{
  "Content-Type": "application/json",
  "x-auth-token": "<JWT Token>"
}
```
**Body**:
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

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.
