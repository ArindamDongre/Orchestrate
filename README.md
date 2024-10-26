# Orchestrate

## Overview
The Orchestrate is a Spring Boot and React-based workflow management tool designed for managing, executing, and visualizing workflows. It provides a RESTful API for workflow operations and a frontend interface for seamless interaction with the workflow data.

## Technologies Used
- **Backend**: Java, Spring Boot, MySQL, JPA, Hibernate
- **Frontend**: React, React Flow
- **Other Tools**: IntelliJ IDEA (for backend), Node.js (for frontend)

## Features
- Create and manage workflows with multiple steps, actions, and conditions.
- Dynamic visualization of workflow steps and dependencies using React Flow.
- RESTful API for backend operations, including CRUD operations on workflows and their components.
- Execution engine that simulates workflow steps based on predefined actions and conditions.

## Project Structure
1. **Backend**: Manages workflows, actions, activities, and conditions using Spring Boot with MySQL as the database.
2. **Frontend**: Provides an interactive UI for creating and visualizing workflows using React and React Flow.

## Getting Started

### Prerequisites
- Java 11 or higher
- MySQL
- Maven
- Node.js and npm (for the frontend)

### Installation

#### Backend Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArindamDongre/Orchestrate.git
   cd Orchestrate/backend
   ```
2. **Configure the database**:
   - Create a MySQL database for the application.
   - Update the application.properties file in src/main/resources with your database connection details:
     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```
3. Build and run the backend:
   - Open the project in IntelliJ or your preferred IDE.
   - Run the WorkflowSystemApplication class.

#### Frontend Setup
1. **Navigate to the frontend directory**:
   ```bash
   cd Orchestrate/frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the frontend**:
   ```bash
   npm run start
   ```
   
## API Endpoints

### Workflows
- **GET** `/workflows`: Fetch all workflows
- **GET** `/workflows/{id}`: Fetch a workflow by ID
- **POST** `/workflows`: Create a new workflow
- **PUT** `/workflows/{id}`: Update an existing workflow
- **DELETE** `/workflows/{id}`: Delete a workflow

### Actions
- **GET** `/actions`: Fetch all actions
- **GET** `/actions/{id}`: Fetch an action by ID
- **POST** `/actions`: Create a new action
- **PUT** `/actions/{id}`: Update an action
- **DELETE** `/actions/{id}`: Delete an action

### Activities
- **GET** `/activities`: Fetch all activities
- **GET** `/activities/{id}`: Fetch an activity by ID
- **POST** `/activities`: Create a new activity
- **PUT** `/activities/{id}`: Update an activity
- **DELETE** `/activities/{id}`: Delete an activity

### Execution
- **POST** `/execution/start/{workflowId}`: Execute the workflow steps and generate a dynamic graph structure for frontend visualization.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.
