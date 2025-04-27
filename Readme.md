# System View APIs

This project provides a simple HTTP server that exposes system information through various API endpoints. It allows users to access details about the CPU, memory, operating system, user, network, and process information in JSON format.

## Features

- Retrieve system information via HTTP endpoints.
- Human-readable formatting for memory and uptime.
- Lightweight and easy to use.

## API Endpoints

| Endpoint     | Description                              |
|--------------|------------------------------------------|
| `/`          | General information about the API.      |
| `/cpu`       | CPU details such as model, cores, and load average. |
| `/memory`    | Memory usage details (total, free, used).|
| `/os`        | Operating system details.               |
| `/user`      | Current user information.               |
| `/network`   | Network interfaces information.         |
| `/process`   | Process details such as PID, memory usage, and uptime. |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitojha07/system-view-APIs

 2. Navigate to the project directory:
    ```bash
   cd system-view-APIs

 3. Install dependencies (if any):
    ```bash
   npm install

## Usage
1. Start the server:
    ```bash
    node app.js

2. Open your browser or use a tool like curl or Postman to access the endpoints:
- Example: http://localhost:3000/cpu

## Configuration
- The server listens on port 3000 by default. You can change the port by setting the PORT environment variable:
    ```bash
    PORT=3000 node app.js

## License
- This project is licensed under the MIT License.

