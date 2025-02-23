
# 🚀 Express.js API - User Management  

This project is part of Lab Two in the Node.js course at the Information Technology Institute (ITI). demonstrating a simple Express.js API for managing users with CRUD operations. 

## 📌 **Setup**  
1. Install dependencies:  
   ```sh
   npm install express
   ```  
2. Run the server:  
   ```sh
   node server.js
   ```  
3. Server runs on `http://localhost:3030/`  

---

## 📡 **API Endpoints**  

### 🔍 GET `/users/:id?` – Fetch Users  
- 📥 **Without ID** → Returns all users  
- 📥 **With ID (Number)** → Returns user with matching ID  
- 📥 **With Name (String)** → Returns users with matching name  
- 📤 **Not Found?** → `{ "msg": "USER NOT FOUND [CHECK ID]" }`  

📌 **Example:**  
```sh
GET /users/1  # Fetch user with ID 1
GET /users/ahmed  # Fetch users named "ahmed"
```

---

### ➕ POST `/users` – Add User  
- 📥 **Body:**  
  ```json
  { "name": "John", "age": 25 }
  ```
- 📤 **Response:** `"USER ADDED!"`  

📌 **Example:**  
```sh
POST /users  
Body: { "name": "John", "age": 25 }
```

---

### ✏️ PUT `/users/:id` – Update User  
- 📥 **ID required in URL**  
- 📥 **Updates name or age**  
- 📤 **Success:** `{ "message": "USER UPDATE" }`  
- 📤 **Not Found?** `{ "message": "user not found [check inserted ID]" }`  
- 📤 **No ID?** `{ "message": "ID NOT PASSED" }`  

📌 **Example:**  
```sh
PUT /users/1  
Body: { "name": "Jane" }
```

---

### ❌ DELETE `/users/:id` – Remove User  
- 📥 **ID required in URL**  
- 📥 **Finds & deletes user**  
- 📤 **Response:** `{ "message": "USER REMOVED" }`  

📌 **Example:**  
```sh
DELETE /users/3
```

---

## 🚀 **Server Running**  
✅ Starts on **port 3030**  
✅ Logs: `"running the server from 3030 port...."`  

---