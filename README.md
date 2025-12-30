

# MEAN Admin Dashboard with Analytics & Reporting

This is a  full-stack administrative panel that I have built using the **MEAN stack** (MongoDB, Express.js, Angular, Node.js). This project features secure JWT authentication with a  responsive UI, and data visualization designed for CRM (here I used chart.js) and analytics platforms.

##  Live Demo Links 
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
* **Frontend:** Angular, Chart.js
* **Backend:** Node.js , Express.js
* **Database:** MongoDB Atlas
* **Authentication:** JSON Web Tokens (JWT)& Bcrypt 

---

## 💻 Local Setup Instructions

### Prerequisites
* **Node.js**: v18.x or higher
* **npm**: v9.x or higher
* **Angular CLI**: v18.x (`npm install -g @angular/cli`)

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
