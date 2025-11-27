import React from 'react';
import Roadmap from '../components/Roadmap';
import { dsaTopics } from '../data/dsaTopics';

function DSAPage() {
    return (
        <Roadmap title="DSA Roadmap" topics={dsaTopics} />
    );
}

export default DSAPage;
