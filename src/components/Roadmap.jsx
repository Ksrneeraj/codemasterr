import React, { useState } from 'react';

function Roadmap({ title, topics }) {
    const [expandedTopic, setExpandedTopic] = useState(null);
    const [selectedConcept, setSelectedConcept] = useState(null);
    const [activeTab, setActiveTab] = useState('theory'); // 'theory' or 'problems'

    const toggleTopic = (id) => {
        if (expandedTopic === id) {
            setExpandedTopic(null);
            setSelectedConcept(null);
        } else {
            setExpandedTopic(id);
            setSelectedConcept(null);
            setActiveTab('theory');
        }
    };

    const handleConceptClick = (concept) => {
        if (selectedConcept?.id === concept.id) {
            setSelectedConcept(null);
        } else {
            setSelectedConcept(concept);
            setActiveTab('theory');
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'var(--accent-green)';
            case 'Medium': return 'var(--accent-blue)';
            case 'Hard': return '#ef4444';
            default: return 'var(--text-secondary)';
        }
    };

    return (
        <div className="animate-fade-in" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 className="animate-slide-up" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: 'var(--accent-blue)' }}>
                {title}
            </h1>

            <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '20px', animationDelay: '0.1s' }}>
                {topics.map((topic) => (
                    <div key={topic.id} style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)'
                    }}>
                        {/* Topic Header */}
                        <button
                            onClick={() => toggleTopic(topic.id)}
                            className="hover-scale"
                            style={{
                                width: '100%',
                                padding: '20px',
                                textAlign: 'left',
                                backgroundColor: 'transparent',
                                color: 'var(--text-primary)',
                                fontSize: '1.4rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                        >
                            <span>{topic.title}</span>
                            <span style={{ color: 'var(--accent-green)' }}>
                                {expandedTopic === topic.id ? '−' : '+'}
                            </span>
                        </button>

                        {/* Topic Content (Concepts List) */}
                        {expandedTopic === topic.id && (
                            <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid var(--border-color)' }}>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontStyle: 'italic' }}>
                                    {topic.description}
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
                                    {topic.concepts.map((concept) => (
                                        <button
                                            key={concept.id}
                                            onClick={() => handleConceptClick(concept)}
                                            className="hover-scale"
                                            style={{
                                                padding: '15px',
                                                backgroundColor: selectedConcept?.id === concept.id ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                                                border: selectedConcept?.id === concept.id ? '1px solid var(--accent-blue)' : '1px solid transparent',
                                                borderRadius: '6px',
                                                color: 'var(--text-primary)',
                                                textAlign: 'left',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{concept.title}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Click to view details</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Concept Details Panel */}
                                {selectedConcept && topic.concepts.find(c => c.id === selectedConcept.id) && (
                                    <div className="animate-fade-in" style={{
                                        marginTop: '20px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border-color)',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Tabs */}
                                        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
                                            <button
                                                onClick={() => setActiveTab('theory')}
                                                style={{
                                                    flex: 1,
                                                    padding: '15px',
                                                    backgroundColor: activeTab === 'theory' ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                                    color: activeTab === 'theory' ? 'var(--accent-blue)' : 'var(--text-secondary)',
                                                    border: 'none',
                                                    borderBottom: activeTab === 'theory' ? '2px solid var(--accent-blue)' : 'none',
                                                    cursor: 'pointer',
                                                    fontWeight: 'bold',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                📖 Theory & Resources
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('problems')}
                                                style={{
                                                    flex: 1,
                                                    padding: '15px',
                                                    backgroundColor: activeTab === 'problems' ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                                    color: activeTab === 'problems' ? 'var(--accent-blue)' : 'var(--text-secondary)',
                                                    border: 'none',
                                                    borderBottom: activeTab === 'problems' ? '2px solid var(--accent-blue)' : 'none',
                                                    cursor: 'pointer',
                                                    fontWeight: 'bold',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                🧩 Practice Problems
                                            </button>
                                        </div>

                                        {/* Content Area */}
                                        <div style={{ padding: '20px' }}>
                                            <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.5rem', marginBottom: '15px' }}>
                                                {selectedConcept.title}
                                            </h3>

                                            {activeTab === 'theory' ? (
                                                <div className="animate-fade-in">
                                                    <div style={{ marginBottom: '20px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                                                        <strong>Concept:</strong> {selectedConcept.theory}
                                                    </div>

                                                    {selectedConcept.diagram && (
                                                        <div style={{
                                                            marginBottom: '20px',
                                                            padding: '15px',
                                                            backgroundColor: 'rgba(74, 222, 128, 0.1)',
                                                            borderRadius: '4px',
                                                            fontFamily: 'monospace',
                                                            color: 'var(--accent-green)'
                                                        }}>
                                                            {selectedConcept.diagram}
                                                        </div>
                                                    )}

                                                    {selectedConcept.resources && selectedConcept.resources.length > 0 && (
                                                        <div style={{ marginTop: '20px' }}>
                                                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>📚 External Resources:</h4>
                                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                                {selectedConcept.resources.map((res, idx) => (
                                                                    <li key={idx} style={{ marginBottom: '8px' }}>
                                                                        <a
                                                                            href={res.link}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
                                                                            className="hover-underline"
                                                                        >
                                                                            🔗 {res.name} <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>({res.source})</span>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="animate-fade-in">
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                                        <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Selected Problems:</h4>
                                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Sorted by Difficulty</span>
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                        {selectedConcept.problems && selectedConcept.problems.length > 0 ? (
                                                            selectedConcept.problems
                                                                .sort((a, b) => {
                                                                    const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
                                                                    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
                                                                })
                                                                .map((problem, index) => (
                                                                    <a
                                                                        key={index}
                                                                        href={problem.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="hover-scale"
                                                                        style={{
                                                                            padding: '12px',
                                                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                                            borderRadius: '4px',
                                                                            color: 'var(--text-primary)',
                                                                            textDecoration: 'none',
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            alignItems: 'center',
                                                                            transition: 'background 0.2s, transform 0.2s'
                                                                        }}
                                                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                                                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
                                                                    >
                                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                            <span style={{ fontWeight: 'bold' }}>{problem.name}</span>
                                                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{problem.platform || 'LeetCode'}</span>
                                                                        </div>
                                                                        <span style={{
                                                                            fontSize: '0.8rem',
                                                                            padding: '2px 8px',
                                                                            borderRadius: '12px',
                                                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                                                            color: getDifficultyColor(problem.difficulty),
                                                                            border: `1px solid ${getDifficultyColor(problem.difficulty)}`
                                                                        }}>
                                                                            {problem.difficulty}
                                                                        </span>
                                                                    </a>
                                                                ))
                                                        ) : (
                                                            <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic', padding: '10px' }}>
                                                                No problems added yet.
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Roadmap;
