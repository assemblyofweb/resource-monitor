### Backend (`BE`) README

# Performance Monitoring Dashboard - Backend

## Overview

This project is the backend part of the Performance Monitoring Dashboard application. The backend is responsible for serving dynamic performance data (IOPS, Throughput) and managing snapshot policy configurations. It provides RESTful APIs for the frontend to interact with.

### Key Features

- **Dynamic Data Generation**: Generates hourly performance data (IOPS, Throughput) for the last 7 days.
- **Snapshot Policy Management**: Allows users to get and update snapshot policies via API endpoints.
- **User Information API**: Serves user information for display in the frontend.

## Project Structure

```plaintext
qumulo-be/
│
├── app/                      # Core application logic
│   ├── controllers/          # Controllers handling API requests
│   ├── exceptions/           # Custom exception handlers
│   ├── middleware/           # Middleware for request/response handling
│   └── models/               # Data models
│
├── bin/                      # Scripts for server, console, and testing
│
├── build/                    # Compiled TypeScript files (output from tsc)
│
├── config/                   # Configuration files for the application
│
├── data/                     # JSON files with mock or seed data
│
├── database/                 # Database migrations
│
├── postmanCollection/        # Postman collection for API testing
│
├── start/                    # Entry points for the application
│
├── tests/                    # Testing files
│
├── tmp/                      # Temporary files generated during runtime
│
├── .env                      # Environment variables configuration
├── Dockerfile                # Docker configuration for containerizing the app
├── docker-compose.yml        # Docker Compose configuration
├── README.md                 # Project documentation
└── LICENSE                   # License information
```

## Technologies Used

- **AdonisJS**: A fully featured web framework for Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **UUID**: Used for generating unique identifiers for data records.
- **dotenv**: A module to load environment variables from a `.env` file.

## How to Run the Application

### Prerequisites

- **Node.js** (>=20.x)
- **npm** or **yarn**
- **Docker** and **Docker Compose**

### Setup

1. **Clone the Repository:**

```bash
git clone https://github.com/assemblyofweb/resource-monitor.git
```

2. **Navigate to the Backend Directory:**

```bash
cd Qumulo/qumulo-be
```

3. **Install Dependencies:**

```bash
npm install
```

or

```bash
yarn install
```

4. **Run the Application:**

```bash
npm start
```

or

```bash
yarn start
```

5. **Access the API Endpoints:**

   The backend server will be running on `http://localhost:5000`.

- **GET /api/performance**: Retrieve performance data (IOPS, Throughput).
- **GET /api/snapshot-policy**: Retrieve current snapshot policy.
- **PUT /api/snapshot-policy**: Update snapshot policy.
- **GET /api/user**: Retrieve user information.

### Customization

- **Environment Variables**: Customize the server by creating a `.env` file in the root directory and defining variables like `PORT`.
- **Mock Data**: You can modify the mock data files in the `data` directory to change the default data served by the APIs.

# Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find a bug or have a feature request.

# License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
