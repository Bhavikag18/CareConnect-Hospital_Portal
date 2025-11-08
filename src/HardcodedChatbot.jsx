import React, { useState } from 'react';

const responses = {
  hello: 'Hello! How can I help you?',
  help: 'Sure, I am here to assist you.',
  doctor: 'Doctors are available from 9am to 5pm.',
  appointment: 'You can book an appointment from the appointments page.',
  bye: 'Goodbye! Have a nice day!',
  
  "fever": "You can visit a General Physician",
  "high temperature": "You can visit a General Physician",
  "chills": "You can visit a General Physician",
  "fatigue": "You can visit a General Physician",

  "cold": "You can visit a General Physician",
  "cough": "You can visit a General Physician",
  "sore throat": "You can visit a General Physician",
  "runny nose": "You can visit a General Physician",
  "flu": "You can visit a General Physician",

  "chest pain": "You can visit a Cardiologist",
  "heart pain": "You can visit a Cardiologist",
  "palpitations": "You can visit a Cardiologist",
  "shortness of breath": "You can visit a Cardiologist",
  "high blood pressure": "You can visit a Cardiologist",

  "stomach pain": "You can visit a Gastroenterologist",
  "acidity": "You can visit a Gastroenterologist",
  "indigestion": "You can visit a Gastroenterologist",
  "diarrhea": "You can visit a Gastroenterologist",
  "constipation": "You can visit a Gastroenterologist",

  "joint pain": "You can visit an Orthopedic",
  "back pain": "You can visit an Orthopedic",
  "bone fracture": "You can visit an Orthopedic",
  "knee pain": "You can visit an Orthopedic",

  "muscle pain": "You can visit a Physiotherapist",
  "sprain": "You can visit a Physiotherapist",
  "stiffness": "You can visit a Physiotherapist",

  "skin allergy": "You can visit a Dermatologist",
  "skin rash": "You can visit a Dermatologist",
  "itching": "You can visit a Dermatologist",
  "acne": "You can visit a Dermatologist",
  "eczema": "You can visit a Dermatologist",
  "hair fall": "You can visit a Dermatologist",

  "tooth pain": "You can visit a Dentist",
  "bleeding gums": "You can visit a Dentist",
  "cavity": "You can visit a Dentist",
  "bad breath": "You can visit a Dentist",

  "eye pain": "You can visit an Ophthalmologist",
  "blurred vision": "You can visit an Ophthalmologist",
  "red eyes": "You can visit an Ophthalmologist",
  "dry eyes": "You can visit an Ophthalmologist",

  "ear pain": "You can visit an ENT Specialist",
  "hearing loss": "You can visit an ENT Specialist",
  "nose blockage": "You can visit an ENT Specialist",
  "sinus": "You can visit an ENT Specialist",

  "thyroid": "You can visit an Endocrinologist",
  "diabetes": "You can visit an Endocrinologist",
  "hormonal imbalance": "You can visit an Endocrinologist",

  "anxiety": "You can visit a Psychiatrist",
  "depression": "You can visit a Psychiatrist"

};

function getResponse(input) {
  const lower = input.toLowerCase();
  for (const key in responses) {
    if (lower.includes(key)) return responses[key];
  }
  return "Sorry, I didn't understand that.";
}

export default function HardcodedChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setMessages(msgs => [...msgs, { sender: 'bot', text: getResponse(input) }]);
    setInput('');
  }

  // Colors for dark mode visibility
  const boxStyle = {
    maxWidth: 400,
    margin: '40px auto',
    border: '1px solid #444',
    borderRadius: 8,
    padding: 16,
    background: '#222',
    color: '#f5f5f5',
    boxShadow: '0 2px 16px rgba(0,0,0,0.5)'
  };
  const userMsgStyle = {
    background: '#1565c0',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: 6,
    display: 'inline-block',
    maxWidth: '80%'
  };
  const botMsgStyle = {
    background: '#26a69a',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: 6,
    display: 'inline-block',
    maxWidth: '80%'
  };
  const inputStyle = {
    width: '70%',
    padding: 8,
    borderRadius: 4,
    border: '1px solid #555',
    background: '#333',
    color: '#f5f5f5'
  };
  const buttonStyle = {
    marginLeft: 8,
    padding: '8px 16px',
    borderRadius: 4,
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ color: '#90caf9' }}>Simple Chatbot</h2>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={msg.sender === 'user' ? userMsgStyle : botMsgStyle}>{msg.text}</span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
        style={inputStyle}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} style={buttonStyle}>
        Send
      </button>
    </div>
  );
}
