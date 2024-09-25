import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FeedbackProvider } from './context/FeedbackContext';

ReactDOM.render(
  <FeedbackProvider>
    <App />
  </FeedbackProvider>,
  document.getElementById('root')
);
