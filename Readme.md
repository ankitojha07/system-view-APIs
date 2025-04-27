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
   git clone <repository-url>