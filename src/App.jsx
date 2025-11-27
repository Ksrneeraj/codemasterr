import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import DSAPage from './pages/DSAPage';
import SQLPage from './pages/SQLPage';
import AuthPage from './pages/AuthPage';


function App() {
    const { user, logout } = useAuth();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header */}
            <header style={{
                padding: '20px 40px',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" className="hover-scale" style={{ textDecoration: 'none', display: 'block' }}>
                    <div className="typewriter" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-green)', width: '13ch' }}>
                        &lt;CodeMaster /&gt;
                    </div>
                </Link>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Link to="/" className="nav-link" style={{ color: 'var(--text-secondary)' }}>Home</Link>
                    <Link to="/dsa" className="nav-link" style={{ color: 'var(--accent-blue)' }}>DSA</Link>
                    <Link to="/sql" className="nav-link" style={{ color: 'var(--accent-purple)' }}>SQL</Link>

                    {user ? (
                        <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ color: 'var(--accent-purple)' }}>Hello, {user.name}</span>
                            <button
                                onClick={logout}
                                className="nav-link"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid var(--border-color)',
                                    fontSize: '0.9rem'
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link" style={{ color: 'var(--accent-green)' }}>Login</Link>
                            <Link to="/signup" className="nav-link" style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>Sign Up</Link>
                        </>
                    )}
                </nav>
            </header>

            {/* Main Content Area */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dsa" element={<DSAPage />} />
                <Route path="/sql" element={<SQLPage />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/signup" element={<AuthPage />} />
            </Routes>

        </div>
    );
}

export default App;
