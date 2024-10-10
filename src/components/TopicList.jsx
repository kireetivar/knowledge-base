import React, { useEffect, useState } from 'react';

function TopicList({ onSelect }) {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        // Fetch the list of Markdown files from the public/markdown directory
        fetch('/markdown/')
            .then(response => response.text())
            .then(data => {
                // Since we can't dynamically list files in public, we'll manually define them
                // Alternatively, use a backend to provide the list
                const availableTopics = ['topic1', 'topic2']; // Update as needed
                setTopics(availableTopics);
            })
            .catch(err => {
                console.error('Error fetching topics:', err);
                setTopics([]);
            });
    }, []);

    return (
        <div className="sidebar">
            <h2>Topics</h2>
            <ul>
                {topics.map(topic => (
                    <li key={topic}>
                        <button onClick={() => onSelect(topic)}>
                            {topic.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopicList;
