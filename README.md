##  Project Overview

This project is a **Node.js backend server** developed as part of the **FarAlpha Technologies assignment**. The main goal of this assignment is to demonstrate backend development fundamentals along with modern deployment practices using **Docker** and **Kubernetes**.

The application is simple, stable, and production-ready, focusing on clean structure, correct server setup, and deployment readiness.

---

##  Tech Stack

* **Backend:** Node.js (Express.js)
* **Containerization:** Docker
* **Orchestration:** Kubernetes
* **Package Manager:** npm

---



---

##  How to Run the Project Locally

###  Prerequisites

* Node.js installed
* npm installed


---

##  Docker Setup

### Build Docker Image

```bash
docker build -t faralpha-assignment .
```

### Run Docker Container

```bash
docker run -p 5000:5000 faralpha-assignment
```

This confirms that the application runs correctly inside a Docker container.

---

##  Kubernetes Deployment

The `K8s` folder contains Kubernetes configuration files that can be used to deploy this application in a cluster environment.

These files help in:

* Deploying the application
* Managing replicas
* Exposing the service

This setup shows readiness for **scalable and cloud-native deployment**.

---

##  Results

* The backend server started successfully on the local system.
* The application listened on the configured port without errors.
* Defined routes responded correctly, confirming proper request handling.
* Docker image was built successfully, and the container ran as expected.
* Kubernetes configurations were prepared for deployment.
<img width="1920" height="1020" alt="Screenshot 2026-01-05 173944" src="https://github.com/user-attachments/assets/346f3a7f-2459-4a8c-85d2-666b4bf601c5" />


---

##  Observations

* The project demonstrates a clear understanding of Node.js backend fundamentals.
* Docker ensures consistent behavior across different environments.
* Kubernetes configuration reflects knowledge of modern deployment practices.
* The code structure is simple, readable, and easy to maintain.
* The application is stable and provides a solid base for future enhancements.

---

##  Conclusion

This assignment successfully meets the objectives of building, containerizing, and preparing a backend application for deployment. It reflects practical backend knowledge along with awareness of DevOps and deployment workflows, making it suitable for real-world applications.
