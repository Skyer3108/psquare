# HR Management System
A comprehensive HR Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This application simplifies human resource management by providing functionalities such as employee management, candidate management, leave tracking, and adding new candidate login authentication .

# Features

# Admin Features

Dashboard: Overview of HR activities with key performance indicators.
Employee Management: Add, update, delete, and view employee details.
Candiate Management:  Add, update, delete,status update and view employee details.

# Prerequisites

Ensure you have the following installed on your system:

Node.js (v16 or higher)
MongoDB (local or cloud-based, e.g., MongoDB Atlas)
Git

#Setup

# Clone the Repository

git clone git-repo 
cd hr-management-system

#Backend Setup

Navigate to the backend directory.
cd backend
npm install
npm start

#Frontend Setup

Navigate to the frontend directory

cd frontend
npm install
npm start

Run the Application

Open your browser and navigate to http://localhost:3000 for the frontend and http://localhost:5005 for the backend.

#API EndPoints

Authentication
POST /api/user/register - Register a new user.
POST /api/user/login - Login a user.

Candidate Management
GET /api/candidate/addcadidate - Get all employees.
POST /api/candidate/getall-candidate- Add a new employee.
PUT /api/update-candidate/:id - Update Canditate Status details.
DELETE /api/delete-cadidate/:id - Delete an employee.

Employee Management
GET /api/emp/get-employees - Get all employees.
PUT /api/emp/emp-update/:_id - Updateemployee details.
DELETE /api/emp/emp-delete/:id - Delete an employee.

# Overview of Pages Screen Shot

# Login & Register Page

![Screenshot 2024-12-30 112445](https://github.com/user-attachments/assets/38ab499c-9469-4da5-b71f-44c7f8d11470)

![Screenshot 2024-12-30 112504](https://github.com/user-attachments/assets/df7c31de-c235-4928-99dd-0c3ba8b6666d)

# Candidate Page

![Screenshot 2024-12-30 112537](https://github.com/user-attachments/assets/c5a353c7-1459-4903-bad3-216c0993b652)

Add Candidate Page

![Screenshot (7)](https://github.com/user-attachments/assets/0ba9262f-09ac-4372-97e9-ba303d8ff8c8)

Update Candidate Status
![Screenshot (9)](https://github.com/user-attachments/assets/065a41a7-8649-4ac2-b0f7-41e2053176ce)

#Employees Page
![Screenshot 2024-12-30 112638](https://github.com/user-attachments/assets/6426027a-c2e2-4754-87bf-8338a8176ef4)

Add Employees Pages

![Screenshot (10)](https://github.com/user-attachments/assets/a7a6afcd-d3fa-453c-945c-78459e52a8c7)

#Logut Popup

![Screenshot 2024-12-30 112700](https://github.com/user-attachments/assets/bc968915-d2ef-4cfb-9f75-8c74ea3725c1)





