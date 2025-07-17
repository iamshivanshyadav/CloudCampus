# CloudCampus - Modern Cloud-Based Learning Platform

A full-stack Learning Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a comprehensive platform for online learning with separate interfaces for instructors and students.

## 🚀 Features

### For Instructors
- **Course Management**: Create, edit, and publish courses
- **Content Upload**: Upload video lectures and course materials
- **Media Management**: Integrated with Cloudinary for media storage
- **Student Tracking**: Monitor enrolled students and their progress
- **Payment Integration**: PayPal integration for course monetization

### For Students
- **Course Discovery**: Browse and search available courses
- **Secure Authentication**: JWT-based authentication system
- **Progress Tracking**: Track learning progress through courses
- **Video Streaming**: Watch course lectures with custom video player
- **Payment Processing**: Secure payment processing for course enrollment
- **Personal Dashboard**: View purchased courses and learning progress

### Common Features
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui
- **Role-Based Access**: Separate interfaces for instructors and students
- **Real-time Updates**: Dynamic content updates
- **Search & Filter**: Advanced course filtering and search capabilities
- **Secure Authentication**: Password hashing with bcrypt and JWT tokens

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components built on Radix UI
- **Framer Motion** - Smooth animations and transitions
- **React Router Dom** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Player** - Video player component

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Media storage and management
- **PayPal SDK** - Payment processing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- MongoDB (v4.0.0 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/iamshivanshyadav/CloudCampus.git
cd CloudCampus
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/learnlux-database
JWT_SECRET=your-jwt-secret-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
```

### 3. Frontend Setup
```bash
cd client
npm install
```

### 4. Start the Application

#### Start the backend server:
```bash
cd server
npm run dev
```

#### Start the frontend development server:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## 📁 Project Structure

```
LearnLux/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── instructor-view/
│   │   │   ├── student-view/
│   │   │   └── common-form/
│   │   ├── pages/             # Page components
│   │   │   ├── auth/
│   │   │   ├── instructor/
│   │   │   └── student/
│   │   ├── context/           # React Context providers
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API service functions
│   │   └── config/            # Configuration files
│   ├── public/                # Static assets
│   └── package.json
├── server/                     # Node.js backend
│   ├── controllers/           # Route controllers
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   │   ├── auth-routes/
│   │   ├── instructor-routes/
│   │   └── student-routes/
│   ├── middleware/           # Custom middleware
│   ├── helpers/              # Utility functions
│   ├── uploads/              # File uploads
│   └── server.js             # Main server file
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/check-auth` - Check authentication status

### Instructor Routes
- `POST /instructor/course/add` - Create new course
- `GET /instructor/course/get` - Get instructor courses
- `PUT /instructor/course/update/:id` - Update course
- `POST /media/upload` - Upload course media

### Student Routes
- `GET /student/course/get` - Get all courses
- `GET /student/course/get/details/:id` - Get course details
- `POST /student/order/create` - Create order
- `POST /student/order/capture` - Capture payment

## 🎨 UI Components

The application uses modern UI components built with:
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 🔐 Authentication & Security

- JWT-based authentication
- Password hashing with bcryptjs
- Role-based access control (Instructor/Student)
- CORS configuration for cross-origin requests
- Input validation and sanitization
- Secure file upload handling

## 💳 Payment Integration

The application integrates with PayPal for secure payment processing:
- Course enrollment payments
- Secure transaction handling
- Payment status tracking
- Order management

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue in the GitHub repository or contact me.

## 🙏 Acknowledgments

- Built with modern web technologies
- UI components from shadcn/ui
- Icons from Lucide React
- Media storage with Cloudinary
- Payment processing with PayPal

---

**Happy Learning! 🎓**
