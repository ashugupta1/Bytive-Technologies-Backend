# To-Do Application Backend

This is the backend of the To-Do Application, built with Node.js and Express. It provides a RESTful API for user authentication and task management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up and login)
- Task management (CRUD operations)
- JWT-based authentication
- CORS enabled for cross-origin requests

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **CORS:** cors middleware for handling cross-origin requests
- **Environment Variables:** dotenv

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (running locally or a cloud instance)

### Installing Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/to-do-application-backend.git
   cd to-do-application-backend

2. Install the required dependencies:
   ```bash
   npm install

3. Running the Application
   ```bash
   npm start

4. make sure set up your mongoose string or url and your secret key and port
   in my case i user .env file
   PORT=8080
   JWT_SECRET= "My_Secret_key"
   MONGO_URI=mongodb://localhost:27017/emailAuthApp
