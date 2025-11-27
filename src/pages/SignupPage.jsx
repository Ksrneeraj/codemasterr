import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();

    const validateInputs = () => {
        if (!name.trim()) return "Name is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return "Invalid email format";

        // Password Validation: Min 8 chars, 1 Uppercase, 1 Special Char
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!passwordRegex.test(password)) {
            return "Password must be at least 8 chars, contain 1 uppercase letter and 1 special char (!@#$%^&*)";
        }
        return null;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        const result = await signup(name, email, password);
        if (result.success) {
            navigate('/login');
        } else {
            setError(result.error);
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }}>
            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '40px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h1 style={{ textAlign: 'center', color: 'var(--accent-purple)' }}>Sign Up</h1>

                {error && (
                    <div className="animate-fade-in" style={{
                        color: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        padding: '10px',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        border: '1px solid #ef4444'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            ...inputStyle,
                            borderColor: error && !name.trim() ? '#ef4444' : 'var(--border-color)'
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            ...inputStyle,
                            borderColor: error && error.includes('email') ? '#ef4444' : 'var(--border-color)'
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password (8+ chars, 1 Upper, 1 Special)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        style={{
                            ...inputStyle,
                            borderColor: error && error.includes('Password') ? '#ef4444' : 'var(--border-color)'
                        }}
                    />
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '-10px', textAlign: 'left', paddingLeft: '5px' }}>
                        <span style={{ color: 'var(--accent-blue)' }}>ℹ️ Tip:</span> Use a strong, unique password to avoid browser security warnings.
                    </div>
                    <button type="submit" disabled={loading} style={buttonStyle}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-secondary)' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--accent-blue)' }}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

const inputStyle = {
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s'
};

const buttonStyle = {
    backgroundColor: 'var(--accent-purple)',
    color: 'var(--bg-primary)',
    padding: '15px',
    borderRadius: '4px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
    border: 'none',
    cursor: 'pointer',
    width: '100%'
};

export default SignupPage;
