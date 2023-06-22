import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle user input and send it to the API
  const handleInput = async () => {
    // Send user input to the API
    const response = await axios.post('https://api.openai.com/v1/completions', { input });

    // Process the response and update the messages state
    const newMessage = {
      content: response.data.output,
      sender: 'chatbot'
    };
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInput('');
  };

  return (
    <div>
      {/* Render previous messages */}
      {messages.map((message, index) => (
        <div key={index}>
          {message.sender === 'user' && <p>User: {message.content}</p>}
          {message.sender === 'chatbot' && <p>Chatbot: {message.content}</p>}
        </div>
      ))}

      {/* Render the input field */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleInput}>Send</button>
    </div>
  );
};

export default Chatbot;
