import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../utils/gemini';
import './Chatbot.css'; // We will create this for styling

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your coding assistant. Ask me anything about DSA or SQL!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const responseText = await getGeminiResponse(input);
            const botMessage = { text: responseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = { text: "Sorry, something went wrong.", sender: 'bot' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button className="chatbot-toggle" onClick={toggleChat}>
                    💬
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>DSA Assistant</h3>
                        <button className="close-btn" onClick={toggleChat}>×</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-content">
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot">
                                <div className="message-content typing">
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-form" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a coding question..."
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()}>
                            ➤
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
