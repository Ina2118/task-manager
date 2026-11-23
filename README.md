# Task Manager – Functional Guide

## 1. Application Purpose

The purpose of the Task Manager application is to help users organize their work, manage projects, and track tasks efficiently.

The application allows users to create and manage personal projects, organize tasks within those projects, monitor task progress, and improve their productivity.

## 2. User Roles

### Guest (Not Authenticated User)

- Can access the Home page.
- Can view the public Projects catalog.
- Can view details of individual projects.
- Can register a new account.
- Can log in to an existing account.
- Cannot create, edit, or delete projects and tasks.

### Authenticated User

- Can access their personal Dashboard.
- Can view the Projects catalog.
- Can create new projects.
- Can edit their own projects.
- Can delete their own projects.
- Can view and manage tasks belonging to their projects.
- Can create, edit, and delete their own tasks.
- Can log out of their account.

## 3. Public Features

The following features are accessible without authentication:

- **Home Page** – introduces the application and its main purpose.
- **Projects Catalog** – displays the available projects.
- **Project Details Page** – displays information about a specific project.
- **Login Page** – allows existing users to authenticate.
- **Registration Page** – allows new users to create an account.

### Authenticated User Features

After successful authentication, users can access additional functionality:

- **Dashboard** – provides an overview of the user's projects and tasks.
- **My Projects** – displays projects created by the authenticated user.
- **Project Management** – allows users to create, edit, and delete their own projects.
- **Task Management** – allows users to create, edit, view, and delete their own tasks.
- **Task Details** – displays information about a specific task.
- **Logout** – allows users to end their session.

## 4. Main Application Flow

1. The user opens the Home page.
2. The user navigates to the Projects catalog.
3. The user selects a project and opens its Details page.
4. The user can register or log in to access private functionality.
5. After authentication, the user is redirected to their Dashboard.
6. The authenticated user creates a new project.
7. The user adds tasks to the project.
8. The user manages tasks by editing their information and updating their status.
9. The user can return to their personal projects and track their progress.
10. The user can log out of the application.

## 5. Data Structure

The application uses two main data collections: Projects and Tasks.

### Project Object

- `id` – unique project identifier.
- `title` – project title.
- `description` – project description.
- `ownerId` – identifier of the user who created the project.
- `createdAt` – project creation date.

### Task Object

- `id` – unique task identifier.
- `title` – task title.
- `description` – task description.
- `status` – task status (Pending, In Progress, Completed).
- `projectId` – identifier of the project to which the task belongs.
- `ownerId` – identifier of the user who created the task.
- `createdAt` – task creation date.
- `dueDate` – task deadline.

## 6. Project Architecture

The application follows a feature-based architecture combined with a service layer approach.

The project is organized into the following main folders:

- `core/` – contains application-wide services and route guards.
- `features/` – contains components organized by application functionality:
  - `home/`
  - `projects/`
  - `project-details/`
  - `auth/`
  - `dashboard/`
  - `my-projects/`
  - `task-details/`
- `shared/` – contains reusable components, interfaces, and pipes.
- `app.routes.ts` – defines the application routes.

Services are responsible for authentication and communication with the data source, while components handle the user interface and user interactions.

## 7. Technologies Used

- Angular 22
- TypeScript
- RxJS
- Angular Router
- Angular Reactive Forms
- Firebase Authentication 
- Firebase Firestore 
- HTML
- CSS
- Git and GitHub

## 8. How to Run the Project

1. Clone the repository:

   `git clone https://github.com/Ina2118/task-manager.git`

2. Navigate to the project directory:

   `cd task-manager`

3. Install the dependencies:

   `npm install`

4. Start the Angular development server:

   `ng serve`

5. Open the application in your browser:

   `http://localhost:4200`

