import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const validateInputs = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return "Invalid email format";
        if (password.length < 6) return "Password must be at least 6 characters";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        const result = await login(email, password);
        if (result.success) {
            navigate('/');
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
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '40px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    width: '100%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <h1 style={{ textAlign: 'center', color: 'var(--accent-blue)' }}>Login</h1>

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

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        ...inputStyle,
                        borderColor: error && error.includes('email') ? '#ef4444' : 'var(--border-color)'
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    style={{
                        ...inputStyle,
                        borderColor: error && error.includes('Password') ? '#ef4444' : 'var(--border-color)'
                    }}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        backgroundColor: 'var(--accent-green)',
                        color: 'var(--bg-primary)',
                        padding: '15px',
                        borderRadius: '4px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        transition: 'opacity 0.2s',
                        border: 'none',
                        cursor: 'pointer',
                        opacity: loading ? 0.7 : 1
                    }}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-secondary)' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'var(--accent-blue)' }}>Sign Up</Link>
                </div>
            </form>
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
    outline: 'none',
    transition: 'border-color 0.2s'
};

export default LoginPage;
