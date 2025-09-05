# 🏨 WANDERLUST – Hotel Booking Platform

**WANDERLUST** is a modern and intuitive hotel booking web application designed for travelers to explore, book, and manage hotel stays across various destinations.

🔗 **Live Demo**: [https://wander-project-gvoo.onrender.com/listings]


---

## ✨ Features

- 🔎 Browse hotels by curated categories (Trending, Iconic Cities, Mountains, Castles, Arctic, etc.)
- 🏨 Users can **create**, **edit**, **view**, and **delete hotel listings**
- 📝 Leave reviews and ratings on each hotel listing
- 💳 Secure payments with **Razorpay** gateway
- 🔐 User authentication with Passport.js and session management
- ✅ Booking confirmation with success tick animation
- 📱 Mobile-responsive interface with clean, modern design

---

## ⚙️ Tech Stack

| Layer      | Technologies                               |
|------------|--------------------------------------------|
| Frontend   | EJS,Bootstrap, CSS, Js                     |
| Backend    | Node.js, Express.js                        |
| Database   | MongoDB, Mongoose                          |
| Auth       | Passport.js, bcrypt                        |
| Payments   | Razorpay API                               |
| Cloud      | Cloudinary (image upload)                  |
| Deployment | Render.com                                 |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ravikantray37/Wander_Project.git
cd PROJECT
```
### 2. Install Dependencies
```bash
    npm install
```
### 3. Setup Environment Variables
Create a .env file in the root directory and add the following:
    PORT=8080
    MONGODB_URI=your_mongo_db_connection_string
    SESSION_SECRET=your_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    RAZORPAY_KEY_ID=your_api_key
    RAZORPAY_KEY_SECRET=your_api_secret

### 4. Run the Project
    nodemon filename(app.js file)

    Then visit: http://localhost:port(eg. 8080 etc)



👤 Author
🔗Ravi Kant Ray
    


🙌 Support
🌟 Star the repo if you like the project!