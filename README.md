# Performance Monitoring Dashboard

## Overview

This project is a full-stack application consisting of a frontend and backend. The frontend provides a user interface for monitoring performance metrics and managing snapshot policies, while the backend serves the necessary data and handles business logic.

## Project Structure

```plaintext
Qumulo/
│
├── qumulo-be/                 # Backend service
│   ├── app/                   # Core application logic
│   ├── config/                # Application configuration files
│   ├── database/              # Database migrations and seeders
│   ├── start/                 # Entry points for the application
│   ├── Dockerfile             # Docker configuration for backend
│   ├── docker-compose.yml     # Docker Compose configuration
│   └── .github/               # GitHub Actions workflows for CI/CD
│
├── qumulo-fe/                 # Frontend service
│   ├── components/            # Reusable React components
│   ├── pages/                 # Next.js pages
│   ├── public/                # Static assets
│   ├── services/              # API calls and utility functions
│   ├── styles/                # CSS Modules and global styles
│   ├── Dockerfile             # Docker configuration for frontend
│   ├── docker-compose.yml     # Docker Compose configuration
│   └── .github/               # GitHub Actions workflows for CI/CD
```

Technologies Used
-----------------

*   **Backend**: AdonisJS, Node.js, TypeScript, PostgreSQL
*   **Frontend**: React, Next.js, TypeScript, CSS Modules
*   **Containerization**: Docker, Docker Compose
*   **CI/CD**: GitHub Actions

How to Run the Application
--------------------------

### Prerequisites

*   **Node.js** (>=20.x)
*   **npm** or **yarn**
*   **Docker** and **Docker Compose**

### Setup

1.  **Clone the Repository:**

```bash
git clone https://github.com/assemblyofweb/resource-monitor.git
cd resource-monitor
```

2.  **Install Dependencies for Backend and Frontend:**

```bash
cd qumulo-be
npm install
cd ../qumulo-fe
npm install
```

3.  **Run the Application using Docker:**

    ```bash
    docker-compose up --build
    ```

    The backend will be available at `http://localhost:5000`, and the frontend at `http://localhost:3000`.

4. **Run the Application without Docker**

   *   Start the Backend:

```bash
cd qumulo-be
npm run dev
```

The backend will be available at http://localhost:5000.

    * Start the Frontend:

Open a new terminal window/tab and run:

```bash
cd qumulo-fe
npm run dev
```

The frontend will be available at http://localhost:3000.


CI/CD Pipeline
--------------

This project uses GitHub Actions for continuous integration and continuous deployment. The pipeline is configured to:

*   Build and test both frontend and backend.
*   Build Docker images and push them to Docker Hub.
*   Deploy the application automatically if all tests pass.

Contributing
------------

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find a bug or have a feature request.

License
-------

This project is licensed under the MIT License. See the `LICENSE` file for more details.