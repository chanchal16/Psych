import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { QuestionsContextProvider } from './contexts/QuestionsContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuestionsContextProvider>
      <App />
      </QuestionsContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
