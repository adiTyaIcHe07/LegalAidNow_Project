# ⚖️ LegalAidNow – Your Legal Support Platform

**LegalAidNow** is a full-stack web application designed to connect individuals needing legal help (e.g., rent agreements, property transfers) with verified lawyers. It allows users to post legal problems, and lawyers to register and view cases from a centralized dashboard.

---

## ✨ Features

### 👨‍💼 User Side
- 📝 **Post Legal Problems**: Submit legal issues with category, description, location & contact.
- 📄 **View My Requests**: Manage your posted legal problems.
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile.
- 📞 **Direct Contact**: Lawyers contact users via phone.

### ⚖️ Lawyer Side
- 🧾 **Lawyer Registration**: Register with name, location, and phone number.
- 🔍 **Browse Legal Issues**: View all submitted legal problems.

---

## 💻 Tech Stack

### 🎨 Frontend
- React.js (with Vite)
- React Router DOM
- Axios
- CSS Modules
- react-hot-toast (Notifications)
- react-confirm-alert (Dialogs)

### 🌳 Backend
- Spring Boot
- Spring Web (REST APIs)
- Spring Data JPA (with Hibernate)
- MySQL
- CORS Configuration
- Maven (Build & Dependency Management)

---

## 🛠️ Setup and Installation

### ✅ Prerequisites
- Node.js & npm
- JDK 17+
- Maven
- MySQL Server

---

### 1. ⚙️ Backend Setup

```bash
git clone https://github.com/adiTyaIcHe07/LegalAidNow_Project.git
cd LegalAidNow_Project/legalaidnow-backend
```

**Create the MySQL database:**

```sql
CREATE DATABASE legalaidnow_db;
```

**Edit `application.properties`:**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/legalaidnow_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

**Run the backend server:**

```bash
mvn clean install
mvn spring-boot:run
```

Server runs at: `http://localhost:8080`

---

### 2. 🌐 Frontend Setup

```bash
cd LegalAidNow_Project/legalaidnow-frontend
npm install
```

**Create a `.env` file:**

```env
VITE_APP_API_BASE_URL=http://localhost:8080/api
```

**Run the frontend:**

```bash
npm run dev
```

Opens at: `http://localhost:5173`

---

## ⚙️ Technical Implementation

### 🧠 How It's Built

#### 🌐 Frontend

- The frontend is a single-page application (SPA) built with **React.js**.
- I used **Vite** as the build tool for fast development and HMR.
- **React Router DOM** is used for navigating between views like Home, Browse Lawyers, and User Dashboard.
- **Axios** handles HTTP requests, all centralized inside a `service` file for clean code.
- Styling is done using **CSS Modules**, allowing scoped styles and modular design.
- I added **react-hot-toast** for elegant toast notifications and **react-confirm-alert** for confirmation dialogs to improve UX.

#### 🔧 Backend

- Built with **Java** and the **Spring Boot** framework.
- **Spring Web** was used to build RESTful APIs for lawyers and user legal requests (CRUD operations).
- **Spring Data JPA** with Hibernate manages database persistence through entities (`Lawyer`, `Request`) instead of raw SQL.
- I configured **CORS globally** to enable secure communication between React (port 5173) and Spring Boot (port 8080).
- **Maven** handles project dependencies and packaging.

#### 🛢️ Database

- The app uses **MySQL** for storing lawyer data and legal requests.
- Hibernate is configured to automatically update or generate tables from the Java entities, reducing the need for manual SQL.

---

## 🔍 Key Challenges & Learning Points

- **CORS Setup**: One of the most critical challenges was setting up CORS for smooth frontend-backend communication. I used browser dev tools and backend logs to debug and resolve cross-origin request issues.
- **ID Generation Strategy**: Initially, the ID counter was shared between multiple entities. I later implemented `@TableGenerator` to give each table its own ID sequence, keeping the schema clean and consistent.
- **CRUD Mastery**: Managing the end-to-end flow for all CRUD operations deepened my understanding of full-stack dev. The delete operation, for example, required coordination across React (event handler), Axios (API call), Spring (endpoint), and database (delete logic).

---

## 🚀 Future Enhancements

- 🔐 **Authentication & Authorization**: Add login/signup using **Spring Security + JWT** to secure user and lawyer accounts.
- 🧑‍⚖️ **Lawyer Profiles**: Let lawyers showcase experience, education, and profile images.
- 💬 **In-App Messaging**: Enable direct, secure chat between lawyers and users via WebSocket.
- ⭐ **Ratings & Reviews**: Allow users to leave feedback for lawyers they’ve worked with.
- 📍 **Google Maps Integration**: Show lawyer location on a map for nearby help.
- 📁 **Document Uploads**: Enable users to attach images or files for legal documents.

---

## 📂 Folder Structure

## 📁 Project Folder Structure

```
LegalAidNow_Project/
├── legalaidnow-backend/               # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── legalaidnow/
│   │   │   │           ├── controller/        # REST API Controllers (LawyerController, RequestController)
│   │   │   │           ├── model/             # Entity Classes (Lawyer.java, Request.java)
│   │   │   │           ├── repository/        # JPA Repositories (LawyerRepository, RequestRepository)
│   │   │   │           └── LegalAidNowApplication.java # Main application
│   │   │   └── resources/
│   │   │       ├── application.properties     # Database & CORS config
│   │   │       └── static/                    # (Optional) Static files
│   ├── pom.xml                                # Maven dependencies
│   └── README.md                              # Backend info (optional)

├── legalaidnow-frontend/              # React Frontend
│   ├── public/
│   │   └── index.html                 # Entry HTML
│   ├── src/
│   │   ├── assets/                    # Icons, images, etc.
│   │   ├── components/                # Reusable components (e.g., Navbar, LawyerCard)
│   │   ├── pages/                     # Page components (Home, RegisterLawyer, PostRequest, etc.)
│   │   ├── services/                  # Axios API calls (lawyerService.js, requestService.js)
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env                           # Environment variable (API base URL)
│   ├── package.json                   # Project metadata & dependencies
│   ├── vite.config.js                 # Vite config
│   └── README.md                      # Frontend info (optional)

├── .gitignore                         # Git ignored files
├── LICENSE                            # Project license
└── README.md                          # Master README file
```

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with 💻 by **Aditya Iche** – [GitHub](https://github.com/adiTyaIcHe07)
