import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AuthPage() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { login, signup } = useAuth();

    // Form States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Set initial mode based on URL
    useEffect(() => {
        if (location.pathname === '/signup') {
            setIsSignUpMode(true);
        } else {
            setIsSignUpMode(false);
        }
    }, [location.pathname]);

    const handleModeSwitch = (mode) => {
        setIsSignUpMode(mode);
        setError('');
        // Update URL without reloading
        navigate(mode ? '/signup' : '/login', { replace: true });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const result = await login(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.error || 'Login failed');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        const result = await signup(name, email, password);
        if (result.success) {
            // After signup, switch to login or auto-login (depending on reqs, but plan said redirect to login)
            // But for this UI, maybe we just switch the slider to login?
            // The previous requirement was "redirect to login page".
            // So let's switch to login mode and pre-fill email?
            handleModeSwitch(false);
            alert('Account created! Please sign in.');
        } else {
            setError(result.error || 'Signup failed');
        }
    };

    return (
        <div className="auth-container-wrapper">
            <div className={`auth-container ${isSignUpMode ? 'right-panel-active' : ''}`} id="container">

                {/* Sign Up Form Container */}
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignup} className="auth-form">
                        <h1 className="auth-title">Create Account</h1>

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="auth-input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="auth-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="auth-input"
                        />
                        {error && isSignUpMode && <p className="error-text">{error}</p>}
                        <button type="submit" className="auth-button">Sign Up</button>
                    </form>
                </div>

                {/* Sign In Form Container */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin} className="auth-form">
                        <h1 className="auth-title">Sign in</h1>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="auth-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="auth-input"
                        />
                        <a href="#" className="forgot-password">Forgot your password?</a>
                        {error && !isSignUpMode && <p className="error-text">{error}</p>}
                        <button type="submit" className="auth-button">Sign In</button>
                    </form>
                </div>

                {/* Overlay Container */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="auth-title">Welcome Back!</h1>
                            <p className="auth-p">To keep connected with us please login with your personal info</p>
                            <button className="ghost auth-button" onClick={() => handleModeSwitch(false)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="auth-title">Hello, Friend!</h1>
                            <p className="auth-p">Enter your personal details and start journey with us</p>
                            <button className="ghost auth-button" onClick={() => handleModeSwitch(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
