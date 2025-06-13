# DevOps Assignment: Full-Stack Application Deployment on AWS using Docker, Terraform, NGINX, and SSL

## Objective:
The task is to deploy a full-stack web application on AWS using Docker for containerization, Terraform for infrastructure provisioning, and NGINX as a reverse proxy for routing traffic. The application will consist of two containers: one for the **frontend** and one for the **backend**. You will also configure a custom domain and enable HTTPS using SSL certificates.

---

## Task Breakdown:

### 1. Terraform Setup:
#### Provision AWS Resources using Terraform:
- **EC2 instance** to host the frontend, backend, and NGINX containers.
- **ECR repositories** for both frontend and backend Docker images.
- **IAM roles and Security Groups** for EC2 to pull images from ECR and allow HTTP/HTTPS traffic.

**Important:** Use a lowercase prefix for all resource names to avoid conflicts (e.g., `ec2-frontend-yourname`, `ecr-frontend-yourname`, `sg-webapp-yourname`).

### 2. Dockerization & ECR:
- **Create Docker images** for both the frontend and backend applications (React app for frontend, Node.js API for backend).
- **Push Docker images to AWS ECR** with names like `frontend-yourname` and `backend-yourname`.

### 3. Run Containers on EC2:
- **SSH into the EC2 instance**, pull the Docker images from ECR, and run the frontend and backend containers.

### 4. NGINX Setup:
- **Install and configure NGINX** as a reverse proxy to route traffic:
  - `/` → Frontend container
  - `/api` → Backend container

### 5. SSL Setup for HTTPS:
- **Enable SSL** on NGINX to support HTTPS.

### 6. Domain Mapping:
- **Map a custom domain** (e.g., `myapp.yourdomain.com`) to the EC2 instance’s public IP using a free domain provider.

---

## End Goal:
- The **frontend** should be accessible via `https://myapp.yourdomain.com/`.
- The **backend** should be accessible via `https://myapp.yourdomain.com/api`.
- **NGINX** should route traffic correctly:
  - `/` → Frontend container
  - `/api` → Backend container
- **SSL** should be enabled and working.

---

Feel free to adjust any section as needed. This provides a clear structure of the task in Markdown format for easy viewing in GitHub or any markdown-compatible environment.

