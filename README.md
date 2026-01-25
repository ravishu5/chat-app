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
```

---
## 🐳 RabbitMQ Setup (Docker)

Run the following commands on your EC2 or local machine:
```
sudo apt-get update -y
sudo apt-get install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
```

Run RabbitMQ with Management UI:
```
sudo docker run -d \
 --hostname rabbitmq-host \
 --name rabbitmq-container \
 -e RABBITMQ_DEFAULT_USER=admin \
 -e RABBITMQ_DEFAULT_PASS=admin123 \
 -p 5672:5672 \
 -p 15672:15672 \
 rabbitmq:3-management
```
---
## 🚀 AWS EC2 Deployment Guide

Connect to EC2 :
```
ssh -i "your-key.pem" ubuntu@your_public_ip
```
Update Ubuntu :
```
sudo apt update
sudo apt upgrade
```

Install Node.js (v20) : 
```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Create Environment Variables :
```
vim .env
```

Edit Files Using Vim :
```
vim filename
```

Basic Vim Commands :
```
i → Insert mode
ESC → Exit insert mode
:wq → Save & exit
:q! → Exit without saving
```
---
## Run Backend Services with PM2

Install PM2 :
```
sudo npm install -g pm2
```
Start backend service :
```
pm2 start "your-entry-file.js" --name "chat-backend"
```

Ensure app runs after reboot :
```
pm2 startup
pm2 save
```
---
## Frontend Deployment
Copy Frontend to EC2 :
```
scp -i "chatapp.pem" frontend.zip ubuntu@your-ec2-ip:/home/ubuntu
```

Install Unzip & Extract :
```
sudo apt install unzip -y
unzip frontend.zip -d frontend
cd frontend
```

Run Frontend with PM2 :
```
pm2 start npm --name "frontend" -- run start
```
