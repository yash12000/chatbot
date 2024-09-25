.chat-window {
    width: 400px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  
  .chat-history {
    max-height: 300px;
    overflow-y: auto;
  }
  
  .message {
    padding: 10px;
    margin: 5px 0;
  }
  
  .message.ai {
    background-color: #eee;
  }
  
  .message.user {
    background-color: #cce5ff;
    text-align: right;
  }
  
  .feedback-buttons {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    cursor: pointer;
  }
  
  .feedback-buttons span:hover {
    color: blue;
  }
  