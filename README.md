

# MEAN Admin Dashboard with Analytics & Reporting

A professional full-stack administrative panel built using the **MEAN stack** (MongoDB, Express.js, Angular, Node.js). This project features secure JWT authentication, a responsive UI, and data visualization designed for CRM and analytics platforms.

##  Live Demo
* **Frontend:** [https://dashboard-frontend-6tkm.onrender.com](https://dashboard-frontend-6tkm.onrender.com)
* **Backend API:** [https://mean-admin-backend.onrender.com](https://mean-admin-backend.onrender.com)

---
## VIDEO


https://github.com/user-attachments/assets/f5d56cd1-3f57-4b46-af86-20ac723cb559



##  Key Features
* **Secure Authentication:** JWT-based login and registration with hashed passwords using Bcrypt.
* **Real-time Analytics:** Interactive charts and graphs for data visualization (Chart.js integration).
* **User Management:** Full admin controls to view and manage user records stored in MongoDB Atlas.
* **Responsive Design:** Mobile-first UI architecture ensuring compatibility across all device sizes.

---

## 🛠️ Tech Stack & Version Details
* **Frontend:** Angular 17.0.0+, RxJS 7.8.0+, Chart.js 4.4.0+
* **Backend:** Node.js v18.x (LTS) or higher, Express.js 4.18.0+
* **Database:** MongoDB Atlas (Cloud)
* **Authentication:** JSON Web Tokens (JWT) 9.0.0+ & Bcrypt 5.1.0+

---

## 💻 Local Setup Instructions

### Prerequisites
* **Node.js**: v18.x or higher
* **npm**: v9.x or higher
* **Angular CLI**: v17.x or higher (`npm install -g @angular/cli`)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-name>
2. Backend Setup
Navigate to the backend folder:

Bash

cd backend
Install dependencies:

Bash

npm install
Create a .env file in the backend/ directory and add your credentials:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key_123
Start the server:

Bash

npm start
The API will be accessible at http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:

Bash

cd frontend
Install dependencies:

Bash

npm install
Environment Configuration:

Open src/app/services/auth.service.ts.

For local testing, ensure the apiUrl is set to: private apiUrl = 'http://localhost:5000/api/auth';.

Start the Angular application:

Bash

ng serve
Open your browser to http://localhost:4200.
