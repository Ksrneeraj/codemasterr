import React from 'react';
import Roadmap from '../components/Roadmap';
import { sqlTopics } from '../data/sqlTopics';

function SQLPage() {
    return (
        <Roadmap title="SQL Roadmap" topics={sqlTopics} />
    );
}

export default SQLPage;
