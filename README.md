## 📌 Project Overview

This project is a **Node.js backend server** developed as part of the **FarAlpha Technologies assignment**. The main goal of this assignment is to demonstrate backend development fundamentals along with modern deployment practices using **Docker** and **Kubernetes**.

The application is simple, stable, and production-ready, focusing on clean structure, correct server setup, and deployment readiness.

---

## 🛠️ Tech Stack

* **Backend:** Node.js (Express.js)
* **Containerization:** Docker
* **Orchestration:** Kubernetes
* **Package Manager:** npm

---



---

## 🚀 How to Run the Project Locally

### 🔹 Prerequisites

* Node.js installed
* npm installed

### 🔹 Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shivraj-96/FarAlpha-Technologies-Assignment.git
   cd FarAlpha-Technologies-Assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node app.js
   ```

   OR

   ```bash
   npm start
   ```

4. **Access the application**

   * Open browser or Postman
   * Visit: `http://localhost:5000`

---

## 🐳 Docker Setup

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

## ☸️ Kubernetes Deployment

The `K8s` folder contains Kubernetes configuration files that can be used to deploy this application in a cluster environment.

These files help in:

* Deploying the application
* Managing replicas
* Exposing the service

This setup shows readiness for **scalable and cloud-native deployment**.

---

## 📊 Results

* The backend server started successfully on the local system.
* The application listened on the configured port without errors.
* Defined routes responded correctly, confirming proper request handling.
* Docker image was built successfully, and the container ran as expected.
* Kubernetes configurations were prepared for deployment.

---

## 🧪 Observations

* The project demonstrates a clear understanding of Node.js backend fundamentals.
* Docker ensures consistent behavior across different environments.
* Kubernetes configuration reflects knowledge of modern deployment practices.
* The code structure is simple, readable, and easy to maintain.
* The application is stable and provides a solid base for future enhancements.

---

## 🎯 Conclusion

This assignment successfully meets the objectives of building, containerizing, and preparing a backend application for deployment. It reflects practical backend knowledge along with awareness of DevOps and deployment workflows, making it suitable for real-world applications.
