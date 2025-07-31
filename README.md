# 💻 LAB: Building a Full-Stack RESTful App with MVC, JSX, Unit & Load Testing

**Theme:** *"Engineer Registry"*

---

## 🧠 Objective

Build a full CRUD web application called **Engineer Registry** using:

* Express.js
* MongoDB & Mongoose
* JSX view engine
* MVC structure
* RESTful routing
* Unit testing with Jest & Supertest
* Load testing with Artillery

---

## 📌 Terminal Objectives

1. Scaffold an Express app using the MVC architecture
2. Create full RESTful routes for an `Engineer` resource
3. Use `jsx-view-engine` to render views on GET routes
4. Implement model-level data structure validation via Mongoose
5. Write unit and integration tests using Jest & Supertest
6. Perform load testing using Artillery
7. Secure and organize the project using `.env`, `.gitignore`, and modular folders

---

## 📁 Project Folder Structure

```
engineer-registry/
├── controllers/
│   └── engineerData.js
│   └── engineerRoutes.js
│   └── engineerViews.js
│   └── engineerAPI.js
├── models/
│   └── engineer.js
├── routes/
│   └── engineerRoutes.js
├── views/
│   └── engineers/
│       ├── Index.jsx
│       ├── New.jsx
│       ├── Show.jsx
│       ├── Edit.jsx
├── tests/
│   └── engineer.test.js
├── app.js
├── server.js
├── .env
├── .gitignore
├── artillery.yml
├── package.json
```

---

## 🛠️ Setup Instructions

### 1. Initialize Project

```bash
mkdir engineer-registry
cd engineer-registry
npm init -y
touch server.js app.js .env .gitignore
mkdir models views controllers tests
mkdir views/engineers
```

### 2. Install Dependencies

```bash
npm install express mongoose dotenv jsx-view-engine method-override
npm install morgan bcrypt jsonwebtoken
npm install --save-dev jest supertest mongodb-memory-server artillery@1.7.9
```

### 3. Configure .gitignore

```txt
node_modules/
.env
```

### 4. Configure .env

```env
MONGO_URI=yourlink
```

---

## 🔧 Core Feature Implementation

### 1. `server.js`

---

### 2. `app.js`

---

### 3. `models/engineer.js`

```js
const mongoose = require('mongoose')

const engineerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    yearsExperience: Number,
    available: Boolean
})

const Engineer = mongoose.model('Engineer', engineerSchema)

module.exports = Engineer
```

---

### 4. `controllers`


---

## 🎨 Views

Each of the following JSX files should render basic forms or data. Keep it simple and RESTful.

* `Index.jsx`
* `New.jsx`
* `Show.jsx`
* `Edit.jsx`

*(I can give you all 4 if needed)*

---

## ✅ Unit Testing (with Jest + Supertest + Mongo Memory Server)

### `tests/engineer.test.js`

Use the same pattern as your existing `user.test.js` file, replacing the model and endpoints with `/engineers`.

---

## ⚙️ Load Testing with Artillery

### `artillery.yml`

```yml
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - flow:
      - post:
          url: "/engineers"
          json:
            name: "LoadTestUser"
            specialty: "Stress Testing"
            yearsExperience: 5
            available: true
```

Then run:

```bash
npm run load
```

Add to your `package.json`:

```json
"scripts": {
  "test": "jest",
  "start": "node server.js",
  "dev": "nodemon server.js",
  "load": "artillery run artillery.yml"
}
```

---

## 🔚 Final Deliverables

### ✅ Must-Haves:

* Full MVC folder structure
* Engineer model
* 7 RESTful routes working with JSX
* Create, Show, Edit, Delete working
* Form checkboxes and redirects working
* Unit tests passing
* Artillery test runs without crashing

### ⚠️ Bonus Points:

* Use Flash messages or custom middleware
* Add filtering/sorting in index view
* Implement role-based restrictions for update/delete
* Create a partial JSX component for forms

---
