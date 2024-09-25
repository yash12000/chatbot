import React from 'react';
import ChatWindow from './components/ChatWindow';
import FeedbackPanel from './components/FeedbackPanel';
import FeedbackSummary from './components/FeedbackSummary';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router Dom fixed import

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<ChatWindow />} />
            <Route path="/feedback" element={<FeedbackPanel />} />
            <Route path="/summary" element={<FeedbackSummary />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
