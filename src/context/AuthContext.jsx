import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from local storage on boot
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true };
            } else {
                return { success: false, error: data.error };
            }
        } catch (err) {
            console.error("Login Fetch Error:", err);
            return { success: false, error: 'Connection failed. Is the backend running on port 5000?' };
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true };
            } else {
                return { success: false, error: data.error };
            }
        } catch (err) {
            console.error("Signup Fetch Error:", err);
            return { success: false, error: 'Connection failed. Is the backend running on port 5000?' };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
