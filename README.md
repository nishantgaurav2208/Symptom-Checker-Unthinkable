# Symptom-Checker 🏥

A modern AI-powered symptom checker web application that provides educational insights about health symptoms using Google's Gemini AI. This project is designed for educational purposes and helps users understand potential conditions related to their symptoms.

## 🌟 Features

- **AI-Powered Analysis**: Uses Google Gemini AI to analyze symptoms and provide educational insights
- **Modern UI**: Clean, responsive React frontend with smooth animations
- **Session Management**: Tracks user queries with persistent session history
- **Rate Limiting**: Built-in protection against abuse with request rate limiting
- **Privacy Focused**: PII detection and filtering for user data protection
- **Educational Focus**: Emphasizes that this is for educational purposes only, not medical diagnosis

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 19 with Vite for fast development
- **Styling**: TailwindCSS with custom CSS modules
- **Routing**: React Router for navigation
- **Icons**: Heroicons for consistent iconography
- **Animations**: Framer Motion for smooth transitions
- **Markdown**: React Markdown for rich text rendering

### Backend (Node.js + Express)
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for REST API
- **Database**: MongoDB with Mongoose ODM
- **AI Integration**: Google Generative AI (Gemini)
- **Security**: CORS, rate limiting, input validation
- **Environment**: dotenv for configuration management

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Google AI API key (for Gemini integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd heal-sym
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend-old
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/healthcare-symptom-checker
   GOOGLE_API_KEY=your_gemini_api_key_here
   MODEL=gemini-2.5-flash
   FRONTEND_ORIGIN=http://localhost:5173
   ```

   Create a `.env` file in the `frontend-old` directory:
   ```env
   VITE_API_BASE=http://localhost:5000
   ```

### Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

3. **Start the frontend development server** (in a new terminal)
   ```bash
   cd frontend-old
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

## 📁 Project Structure

```
heal-sym/
├── backend/
│   ├── controller/
│   │   └── symptomController.js    # Request handlers for symptom analysis
│   ├── model/
│   │   └── Query.js               # MongoDB schema for user queries
│   ├── route/
│   │   └── symptom.js             # API routes for symptom endpoints
│   ├── service/
│   │   └── llmService.js          # Google Gemini AI integration
│   ├── server.js                  # Main server file
│   └── package.json
├── frontend-old/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SymptomChecker.jsx # Main symptom analysis component
│   │   │   ├── home.jsx           # Landing page
│   │   │   ├── About.jsx          # About page
│   │   │   ├── Contact.jsx        # Contact page
│   │   │   └── Privacy.jsx        # Privacy policy
│   │   ├── styles/
│   │   │   ├── symptomChecker.css # Symptom checker specific styles
│   │   │   ├── home.css           # Home page styles
│   │   │   └── pageBase.css       # Base styles
│   │   ├── App.jsx                # Main app component with routing
│   │   └── main.jsx               # App entry point
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Symptom Analysis
- `POST /api/symptoms` - Analyze symptoms and get AI insights
  ```json
  {
    "text": "fever, headache, fatigue"
  }
  ```

### History Management
- `GET /api/symptoms/history/:sessionId` - Get user's query history

## 🛡️ Security Features

- **Rate Limiting**: 10 requests per minute per IP
- **Input Validation**: Text length limits and sanitization
- **PII Protection**: Automatic detection and filtering of personal information
- **CORS Configuration**: Secure cross-origin resource sharing
- **Error Handling**: Graceful error responses without sensitive information

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Visual feedback during AI processing
- **History Management**: Local and server-side query history
- **Markdown Rendering**: Rich text formatting for AI responses
- **Session Persistence**: Maintains user sessions across browser sessions
- **Accessibility**: Semantic HTML and keyboard navigation support

## ⚠️ Important Disclaimers

- **Educational Use Only**: This application is designed for educational purposes only
- **Not Medical Advice**: Does not replace professional medical consultation
- **No Diagnosis**: The AI provides general insights, not medical diagnoses
- **Consult Healthcare**: Always seek professional medical advice for health concerns

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Symptom severity tracking
- [ ] Integration with health databases
- [ ] Multi-language support
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Telemedicine integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for providing the AI capabilities
- React and Vite teams for the excellent development experience
- MongoDB for the database solution
- All open-source contributors who made this project possible

## 📞 Support

If you have any questions or need help with the project, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

---

**Remember**: This tool is for educational purposes only. Always consult with healthcare professionals for medical advice and treatment.
