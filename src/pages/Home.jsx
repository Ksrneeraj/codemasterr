import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="animate-fade-in" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
            flexDirection: 'column'
        }}>
            <h1 className="animate-slide-up" style={{ fontSize: '3.5rem', marginBottom: '20px', margin: '0 0 20px 0' }}>
                Master <span style={{ color: 'var(--accent-blue)' }}>Algorithms</span> & <span style={{ color: 'var(--accent-blue)' }}>Data</span>
            </h1>
            <p className="animate-slide-up" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px', animationDelay: '0.1s' }}>
                Level up your coding skills with our advanced curriculum designed for serious developers.
            </p>
            <Link to="/dsa" className="animate-slide-up hover-scale" style={{
                backgroundColor: 'var(--accent-blue)',
                color: 'var(--bg-primary)',
                padding: '15px 30px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                transition: 'background 0.3s, transform 0.2s',
                display: 'inline-block',
                textDecoration: 'none',
                animationDelay: '0.2s'
            }}>
                Start Coding_
            </Link>

            {/* Code Block Visual */}
            <div className="animate-slide-up" style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'left',
                marginTop: '60px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                fontFamily: 'monospace',
                minWidth: '300px',
                animationDelay: '0.3s'
            }}>
                <div className="type-seq-loop type-seq-1" style={{ display: 'block', marginBottom: '5px', width: '25ch', margin: '0' }}>
                    <span style={{ color: 'var(--accent-purple)' }}>def</span> <span style={{ color: 'var(--accent-blue)' }}>solve_problem</span>(skill):
                </div>
                <div className="type-seq-loop type-seq-2" style={{ display: 'block', marginBottom: '5px', paddingLeft: '20px', width: '22ch', margin: '0 0 5px 0' }}>
                    <span style={{ color: 'var(--accent-purple)' }}>if</span> skill == <span style={{ color: 'var(--accent-green)' }}>"DSA"</span>:
                </div>
                <div className="type-seq-loop type-seq-3" style={{ display: 'block', marginBottom: '5px', paddingLeft: '40px', width: '22ch', margin: '0 0 5px 0' }}>
                    <span style={{ color: 'var(--accent-purple)' }}>return</span> <span style={{ color: 'var(--accent-green)' }}>"Optimized"</span>
                </div>
                <div className="type-seq-loop type-seq-4" style={{ display: 'block', paddingLeft: '20px', width: '20ch', margin: '0' }}>
                    <span style={{ color: 'var(--accent-purple)' }}>return</span> <span style={{ color: 'var(--accent-green)' }}>"Success"</span>
                </div>
            </div>
        </section>
    );
}

export default Home;
