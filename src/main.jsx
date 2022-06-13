import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from './contexts/QuizContext';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
