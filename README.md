# Real-Time Chat App with MERN, RabbitMQ & Microservices

## 🚀 Project Overview

This project is a **production-ready real-time chat application** built using the **MERN stack**, **RabbitMQ**, and a **microservices architecture**.  
It demonstrates how to build a scalable, event-driven backend with real-time communication using **Socket.IO**, along with caching, authentication, and deployment best practices.

---

## ✨ Features

- Real-time messaging using **Socket.IO**
- **Microservices architecture**
- Message queue with **RabbitMQ**
- **OTP-based authentication**
- **Redis caching** for better performance
- **MongoDB** for persistent storage
- Dockerized services
- Scalable backend design
- Clean and modular codebase

---

## 🧱 Tech Stack

**Frontend**
- React
- Socket.IO Client

**Backend**
- Node.js
- Express.js
- Microservices

**Infrastructure**
- RabbitMQ (message broker)
- Redis (caching)
- MongoDB (database)
- Docker & Docker Compose
- AWS (deployment)

---

## 🗂 Project Structure

```text
root
├── frontend/              # React client
├── services/
│   ├── mail/              # mail service
│   ├── chat/              # Chat service
│   ├── user/              # User service
├── docker-compose.yml
└── README.md
