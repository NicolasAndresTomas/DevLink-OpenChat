import React, { useState, useEffect, useRef } from 'react';
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebase-config'; 

function Messaging({ currentUser }) {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [newMessage, setNewMessage] = useState(''); // State to store the message being typed
  const messageQuery = query(collection(firestore, 'messages'), orderBy('timestamp')); // Query to order messages by timestamp
  const chatWindowRef = useRef(null); // Reference to the chat window's DOM element

  useEffect(() => {
    // Set up a subscription to the Firestore collection "messages" to listen for changes
    const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [messageQuery]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    try {
      // Create a message object with text, sender, and server timestamp
      const messageData = {
        text: newMessage,
        sender: currentUser ? currentUser.email : 'Anonymous',
        timestamp: serverTimestamp(),
      };

      // Reference to the Firestore collection "messages" and add the new message
      const messagesRef = collection(firestore, 'messages');
      await addDoc(messagesRef, messageData);

      // Clear the new message input field
      setNewMessage('');

      // Scroll to the latest message
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle the error and provide user feedback if needed
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';

    // Assuming timestamp is a Firestore server timestamp, format it as needed
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString(); // Format the timestamp as you like
  };

  return (
    <div className="messaging-container">
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === currentUser.email ? 'user-message' : 'friend-message'}`}
          >
            <p className="sender">
              {message.sender} {formatTimestamp(message.timestamp)}
            </p>
            <p className="message">{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="message-form">
        <input
          className="message-field"
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-btn" type="submit">
          Send
        </button>
        <p className="notice">
          DevLink OpenChat Preview. DevLink encourages all developers and clients to communicate, negotiate terms, and
          collaborate on projects within the marketplace.
        </p>
      </form>
    </div>
  );
}

export default Messaging;