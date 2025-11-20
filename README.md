# Web Camera Application

This is a web-based camera application that allows users to stream video and interact with it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker and Docker Compose installed on your system.

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Installing

1. Clone the repository:
```bash
git clone https://github.com/tarsislimadev/web-camera.git
```
2. Navigate to the project directory:
```bash
cd web-camera
```
3. Build and run the application using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at `http://localhost:8080`.

## Project Structure

*   `docker-compose.yaml`: Defines the services, networks, and volumes for the Docker application.
*   `Dockerfile`: Contains the instructions to build the Docker image for the application.
*   `index.html`: The main HTML file for the web application.
*   `index.js`: The main JavaScript file for the web application.
*   `libs/afrontend/index.js`: Contains frontend JavaScript code.
*   `favicon.ico`: The favicon for the web application.

## Contributing

We welcome contributions! Please feel free to submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request