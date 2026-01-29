# MERN Stack CRUD Application

A beginner-friendly full-stack CRUD (Create, Read, Update, Delete) application built with MongoDB, Express.js, React, and Node.js.

## 📋 Features

- ✅ Create new items
- ✅ View all items
- ✅ Update existing items
- ✅ Delete items
- ✅ Clean and responsive UI
- ✅ RESTful API
- ✅ MVC architecture in backend

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variables management
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - JavaScript library for UI
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS** - Styling

## 📁 Project Structure

```
MY pro/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── itemController.js     # Business logic for items
│   ├── models/
│   │   └── Item.js               # Item data model
│   ├── routes/
│   │   └── itemRoutes.js         # API routes
│   ├── .env.example              # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── itemApi.js        # API service functions
    │   ├── components/
    │   │   ├── AddItemForm.jsx   # Form to add items
    │   │   ├── EditItemForm.jsx  # Form to edit items
    │   │   └── ItemList.jsx      # Display items list
    │   ├── App.css               # Main styles
    │   ├── App.jsx               # Main App component
    │   └── main.jsx              # Entry point
    ├── .env.example
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js

```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
  - Or use **MongoDB Atlas** (cloud database) - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** (comes with Node.js)

### Installation

#### 1. Clone or Download the Project

```bash
cd "MY pro"
```

#### 2. Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your MongoDB connection string
# For local MongoDB:
# MONGO_URI=mongodb://localhost:27017/mern-crud-db
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-crud-db

# Start the backend server
npm start
# OR for development with auto-restart:
npm run dev
```

The backend server will run on `http://localhost:5000`

#### 3. Setup Frontend

Open a **new terminal window** and:

```bash
# Navigate to frontend folder (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file from example (optional)
cp .env.example .env

# Start the frontend development server
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🎯 Usage

1. **Make sure MongoDB is running** (if using local MongoDB)
2. **Start the backend server** (in backend folder): `npm start` or `npm run dev`
3. **Start the frontend dev server** (in frontend folder): `npm run dev`
4. **Open your browser** and go to `http://localhost:3000`

### Testing the Application

1. **Add a new item**: Fill in the form at the top with name, description, and quantity
2. **View items**: All items are displayed in cards below the form
3. **Edit an item**: Click the "Edit" button on any item card
4. **Delete an item**: Click the "Delete" button (will ask for confirmation)

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get single item by ID |
| POST | `/api/items` | Create new item |
| PUT | `/api/items/:id` | Update item by ID |
| DELETE | `/api/items/:id` | Delete item by ID |

### Example API Request (using curl)

```bash
# Create a new item
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","description":"Dell XPS 15","quantity":5}'

# Get all items
curl http://localhost:5000/api/items
```

## 🗄️ Database Schema

### Item Model

```javascript
{
  name: String (required),
  description: String (required),
  quantity: Number (required, min: 0),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🔧 Configuration

### Backend Environment Variables (.env)

```env
MONGO_URI=mongodb://localhost:27017/mern-crud-db
PORT=5000
```

### Frontend Environment Variables (.env)

```env
VITE_API_URL=http://localhost:5000
```

## 🐛 Troubleshooting

### Backend Issues

**Problem**: Server won't start
- Check if MongoDB is running: `mongod --version`
- Verify `.env` file exists and has correct MongoDB URI
- Check if port 5000 is available

**Problem**: "MongoServerError: connect ECONNREFUSED"
- Make sure MongoDB is running
- For local MongoDB: Start with `mongod` command
- For MongoDB Atlas: Check your connection string and network access

### Frontend Issues

**Problem**: Cannot connect to backend
- Verify backend server is running on port 5000
- Check browser console for CORS errors
- Ensure the API URL in `.env` or `itemApi.js` is correct

**Problem**: Blank page
- Check browser console for errors
- Ensure all dependencies are installed: `npm install`

## 📚 Learning Resources

### For Beginners

- [MongoDB Tutorial](https://www.mongodb.com/docs/manual/tutorial/)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
- [React Documentation](https://react.dev/learn)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## 🎓 Key Concepts Demonstrated

### Backend Concepts
- RESTful API design
- MVC (Model-View-Controller) architecture
- Database modeling with Mongoose
- Async/await for asynchronous operations
- Error handling middleware
- CORS configuration

### Frontend Concepts
- React Hooks (useState, useEffect)
- Component composition
- State management
- API integration with Axios
- Form handling
- Conditional rendering

## 🚀 Next Steps to Enhance

Once you're comfortable with this application, try adding:

1. **Authentication**: Add user login/signup with JWT
2. **Validation**: Add more robust form validation
3. **Search**: Add search functionality for items
4. **Pagination**: Add pagination for large lists
5. **Image Upload**: Allow users to add images to items
6. **Sorting & Filtering**: Sort items by date, name, or quantity
7. **Categories**: Add categories for items
8. **Dark Mode**: Implement theme switching

## 📄 License

This project is open source and available for learning purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## ❓ Questions?

If you have questions or run into issues:
1. Check the troubleshooting section above
2. Review the code comments in each file
3. Check the console for error messages

---

**Happy Learning! 🎉**

Built with ❤️ for learning MERN stack development
