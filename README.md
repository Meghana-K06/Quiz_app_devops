# Quiz App DevOps CI/CD Pipeline

This project demonstrates a basic CI/CD pipeline using :contentReference[oaicite:0]{index=0} and :contentReference[oaicite:1]{index=1} for automated deployment of a web application.

The main objective of this project was to understand how modern DevOps workflows automate building and deployment whenever code changes are pushed to :contentReference[oaicite:2]{index=2}.

---

# Technologies Used

- GitHub — Source code management
- Jenkins — CI/CD automation
- Docker — Containerization
- Nginx — Web server
- Docker Desktop — Container runtime

---

# Project Architecture

## Workflow

```text
Developer pushes code to GitHub
        ↓
Jenkins pulls latest code
        ↓
Jenkins builds Docker image
        ↓
Old container is removed
        ↓
New container is deployed
        ↓
Updated application goes live
```

This entire deployment workflow is automated using Jenkins pipelines.

---

# Dockerfile Explanation

The application is a static quiz web application served using Nginx.

## Dockerfile

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

## Explanation

### `FROM nginx:alpine`

Uses a lightweight Nginx server image.

### `COPY . /usr/share/nginx/html`

Copies the project files into the Nginx web directory.

### `EXPOSE 80`

Exposes port 80 for web access.

---

# Jenkins Pipeline Explanation

The Jenkins pipeline automates the deployment process.

## Jenkinsfile

```groovy
pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t quiz-app:latest .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f quiz-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name quiz-container -p 8081:80 quiz-app:latest'
            }
        }
    }
}
```

---

# Pipeline Stages

## Stage 1 — Build Docker Image

```bash
docker build -t quiz-app:latest .
```

This builds the Docker image from the Dockerfile.

---

## Stage 2 — Remove Old Container

```bash
docker rm -f quiz-container || true
```

This removes the previous running container if it exists.

`|| true` prevents pipeline failure if no container exists.

---

## Stage 3 — Run New Container

```bash
docker run -d --name quiz-container -p 8081:80 quiz-app:latest
```

This starts a new container from the updated image.

Port `8081` on the host machine is mapped to port `80` inside the container.

---

# Jenkins and Docker Integration

Jenkins itself runs inside a Docker container.

To allow Jenkins to execute Docker commands, the Docker socket is mounted:

```bash
/var/run/docker.sock
```

This allows Jenkins to communicate with the host Docker daemon.

---

# Automated CI/CD Workflow

```text
GitHub Code
     ↓
Build Docker Image
     ↓
Remove Old Container
     ↓
Run New Container
     ↓
Updated Application Deployed
```

---

# Key Concepts Learned

- CI/CD Pipelines
- Jenkins Automation
- Docker Containerization
- Automated Deployment
- Docker Image and Container Management
- DevOps Workflow Automation

---

# Conclusion

This project helped in understanding how CI/CD pipelines automate application deployment using Jenkins and Docker. It also provided practical exposure to containerized deployments and DevOps workflows.
