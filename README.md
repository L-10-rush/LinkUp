

## TODO: 
- Need to add implementation for the message hashing funtion
- Add the deploy version in the release 


# LinkUp: Real-time Chat Application

Welcome to LinkUp, a modern, full-stack real-time chat application designed for seamless communication. This project demonstrates a robust architecture featuring a Node.js/Express backend, a React frontend, MongoDB for data persistence, and Socket.IO for instant messaging. Connect with friends, send messages, and share media in a secure and intuitive environment. 💬🚀

## ✨ Features

*   **User Authentication**: Secure user registration, login, and logout functionalities with JWT and cookie-based authentication.
*   **Real-time Messaging**: Instant message delivery and reception powered by Socket.IO for a fluid chat experience.
*   **Private Conversations**: Engage in one-on-one chats with other registered users.
*   **Media Sharing**: Send and receive images within chats, leveraging Cloudinary for efficient media storage.
*   **User Profiles**: Update and view user profiles, including profile picture customization.
*   **User Presence**: See which users are currently online for improved connectivity awareness.
*   **Dynamic Theme Switching**: Personalize your chat interface with a variety of themes powered by DaisyUI.
*   **Responsive Design**: A sleek and intuitive user interface built with React, Tailwind CSS, and DaisyUI, optimized for various screen sizes.

## 🛠️ Technologies Used

| Category   | Technology                                          | Description                                                                 |
| :--------- | :-------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | JavaScript runtime for server-side logic                                    |
|            | ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Web application framework for Node.js APIs                                  |
|            | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | NoSQL database for flexible data storage                                    |
|            | ![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=for-the-badge&logo=mongoose&logoColor=white) | MongoDB object modeling for Node.js                                         |
|            | ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white) | Enables real-time, bidirectional communication                              |
|            | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white) | Securely transmit information between parties as a JSON object              |
|            | ![Bcrypt.js](https://img.shields.io/badge/Bcrypt.js-000000?style=for-the-badge&logo=bcrypt&logoColor=white) | Library for hashing passwords                                               |
|            | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) | Cloud-based media management platform                                       |
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | JavaScript library for building user interfaces                             |
|            | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-for-the-badge&logo=vite&logoColor=white) | Next-generation frontend tooling                                            |
|            | ![Zustand](https://img.shields.io/badge/Zustand-4433ff?style=for-the-badge&logo=zustand&logoColor=white) | Small, fast, and scalable state-management solution                         |
|            | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | Utility-first CSS framework for rapid UI development                        |
|            | ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) | Tailwind CSS component library for beautiful UIs                            |
|            | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white) | Declarative routing for React                                               |
|            | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) | Promise-based HTTP client for the browser and Node.js                       |
|            | ![React Hot Toast](https://img.shields.io/badge/Hot_Toast-EA580C?style=for-the-badge&logo=react-query&logoColor=white) | Declarative and accessible toast notifications for React                    |

## ⚙️ Getting Started

Follow these steps to set up and run LinkUp on your local machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/L-10-rush/LinkUp.git
    cd LinkUp
    ```

2.  **Install Backend Dependencies**:
    Navigate into the `backend` directory and install the necessary packages.
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**:
    Navigate into the `frontend` directory and install the necessary packages.
    ```bash
    cd ../frontend
    npm install
    ```

### Environment Variables

Before running the application, you need to set up environment variables for both the backend. Create a `.env` file in the `backend` directory with the following variables:

```dotenv
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_strong_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

*   `PORT`: The port on which the backend server will run (e.g., `5001`).
*   `MONGO_URI`: Your MongoDB connection string. You can get one from MongoDB Atlas or by running a local MongoDB instance.
*   `JWT_SECRET`: A secret key for signing JWTs. Generate a strong, random string for this.
*   `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Credentials for your Cloudinary account, used for image storage.

### 🚀 Usage

To start both the frontend and backend servers:

1.  **From the root directory of the project**, execute the following command:
    ```bash
    npm start
    ```
    This command will concurrently start the backend server and the frontend development server.

2.  **Access the Application**:
    Open your web browser and navigate to `http://localhost:5173` (or the port specified by your frontend Vite server).

3.  **Register/Login**:
    *   If you're a new user, navigate to the `Sign Up` page to create an account. Provide your full name, email, and password.
    *   If you already have an account, proceed to the `Sign In` page and enter your credentials.

4.  **Start Chatting**:
    *   After logging in, you'll be redirected to the Home page. The sidebar will display a list of other registered users.
    *   Select a user from the sidebar to start a new conversation.
    *   Type your message in the input field and press Enter or click the send button. You can also attach images to your messages.

5.  **Update Profile**:
    *   Go to the `Profile` page to view your profile information.
    *   Click the camera icon on your profile picture to upload a new one.

6.  **Change Theme**:
    *   Visit the `Settings` page to customize the application's theme. Select from a variety of themes to personalize your chat experience.

## Backend API

This section provides a detailed breakdown of the LinkUp backend API, following the Dokugen documentation standard for clarity and precision.

### Base URL
`http://localhost:5001/api`

### Endpoints

#### POST /api/auth/signup
**Overview**: Registers a new user account.
**Request**:
```json
{
  "fullName": "Jane Doe",
  "email": "jane.doe@example.com",
  "password": "StrongPassword123"
}
```
**Response**:
```json
{
  "_id": "65f0a0c4d8e9f0a1b2c3d4e5",
  "fullName": "Jane Doe",
  "email": "jane.doe@example.com",
  "profilePic": ""
}
```
**Errors**:
- `400 Bad Request`: "All fields are required", "Password must be at least 6 characters", "Email already exits", "Invalid user data"
- `500 Internal Server Error`: Server-side error during signup process

#### POST /api/auth/login
**Overview**: Authenticates a user and issues a JWT token.
**Request**:
```json
{
  "email": "jane.doe@example.com",
  "password": "StrongPassword123"
}
```
**Response**:
```json
{
  "_id": "65f0a0c4d8e9f0a1b2c3d4e5",
  "fullName": "Jane Doe",
  "email": "jane.doe@example.com",
  "profilePic": ""
}
```
**Errors**:
- `400 Bad Request`: "Invalid credentials"
- `500 Internal Server Error`: Server-side error during login process

#### POST /api/auth/logout
**Overview**: Logs out the authenticated user by clearing the JWT cookie.
**Request**:
(No request body)
**Response**:
```json
{
  "message": "Logged out successfully"
}
```
**Errors**:
- `500 Internal Server Error`: Server-side error during logout process

#### PUT /api/auth/update-profile
**Overview**: Updates the authenticated user's profile picture. Requires authentication.
**Request**:
```json
{
  "profilePic": "data:image/jpeg;base64,/9j/4AAQSkZJ..."
}
```
**Response**:
```json
{
  "_id": "65f0a0c4d8e9f0a1b2c3d4e5",
  "fullName": "Jane Doe",
  "email": "jane.doe@example.com",
  "profilePic": "https://res.cloudinary.com/your-cloud/image/upload/v1/profile_pic_url.jpg",
  "createdAt": "2024-03-12T10:00:00.000Z",
  "updatedAt": "2024-03-12T10:00:00.000Z",
  "__v": 0
}
```
**Errors**:
- `400 Bad Request`: "Profile pic is required"
- `401 Unauthorized`: "Unauthorized - No Token Provided", "Unauthorized - Invalid Token"
- `404 Not Found`: "User not found"
- `500 Internal Server Error`: Server-side error during profile update

#### GET /api/auth/check
**Overview**: Checks if a user is authenticated and returns their profile information. Requires authentication.
**Request**:
(No request body)
**Response**:
```json
{
  "_id": "65f0a0c4d8e9f0a1b2c3d4e5",
  "fullName": "Jane Doe",
  "email": "jane.doe@example.com",
  "profilePic": "https://res.cloudinary.com/your-cloud/image/upload/v1/profile_pic_url.jpg",
  "createdAt": "2024-03-12T10:00:00.000Z",
  "updatedAt": "2024-03-12T10:00:00.000Z",
  "__v": 0
}
```
**Errors**:
- `401 Unauthorized`: "Unauthorized - No Token Provided", "Unauthorized - Invalid Token"
- `404 Not Found`: "User not found"
- `500 Internal Server Error`: Server-side error during authentication check

#### GET /api/messages/users
**Overview**: Retrieves a list of all users, excluding the authenticated user. Requires authentication.
**Request**:
(No request body)
**Response**:
```json
[
  {
    "_id": "65f0a0c4d8e9f0a1b2c3d4e5",
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "profilePic": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "_id": "65f0a0c4d8e9f0a1b2c3d4e6",
    "fullName": "Alice Smith",
    "email": "alice.smith@example.com",
    "profilePic": "https://randomuser.me/api/portraits/women/2.jpg"
  }
]
```
**Errors**:
- `401 Unauthorized`: "Unauthorized - No Token Provided", "Unauthorized - Invalid Token"
- `500 Internal Server Error`: Server-side error during user retrieval

#### GET /api/messages/:id
**Overview**: Fetches all messages exchanged between the authenticated user and a specified user. Requires authentication.
**Request**:
(No request body, `id` is a path parameter representing the `receiverId`)
**Response**:
```json
[
  {
    "_id": "65f0a0c4d8e9f0a1b2c3d4e7",
    "senderId": "65f0a0c4d8e9f0a1b2c3d4e5",
    "receiverId": "65f0a0c4d8e9f0a1b2c3d4e6",
    "text": "Hello there!",
    "image": null,
    "createdAt": "2024-03-12T10:00:00.000Z",
    "updatedAt": "2024-03-12T10:00:00.000Z"
  },
  {
    "_id": "65f0a0c4d8e9f0a1b2c3d4e8",
    "senderId": "65f0a0c4d8e9f0a1b2c3d4e6",
    "receiverId": "65f0a0c4d8e9f0a1b2c3d4e5",
    "text": "Hi! How are you?",
    "image": "https://res.cloudinary.com/your-cloud/image/upload/v1/message_image.png",
    "createdAt": "2024-03-12T10:01:00.000Z",
    "updatedAt": "2024-03-12T10:01:00.000Z"
  }
]
```
**Errors**:
- `401 Unauthorized`: "Unauthorized - No Token Provided", "Unauthorized - Invalid Token"
- `500 Internal Server Error`: Server-side error during message retrieval

#### POST /api/messages/send/:id
**Overview**: Sends a new message to a specified user. Supports text and image messages. Requires authentication.
**Request**:
```json
{
  "text": "This is a test message.",
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
}
```
**Response**:
```json
{
  "_id": "65f0a0c4d8e9f0a1b2c3d4e9",
  "senderId": "65f0a0c4d8e9f0a1b2c3d4e5",
  "receiverId": "65f0a0c4d8e9f0a1b2c3d4e6",
  "text": "This is a test message.",
  "image": "https://res.cloudinary.com/your-cloud/image/upload/v1/uploaded_message_image.png",
  "createdAt": "2024-03-12T10:02:00.000Z",
  "updatedAt": "2024-03-12T10:02:00.000Z"
}
```
**Errors**:
- `401 Unauthorized`: "Unauthorized - No Token Provided", "Unauthorized - Invalid Token"
- `500 Internal Server Error`: Server-side error during message sending

## ✒️ Author Info

*   **Your Name:** [K1ngM0nk]
*   **Email:** [mondalaniket2005@gmail.com]

## 🏅 Badges

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socket.io&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Project Status](https://img.shields.io/badge/Status-Complete-brightgreen)](https://github.com/L-10-rush/LinkUp)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)