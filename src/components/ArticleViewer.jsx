import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ArticleViewer({ selectedTopic }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (selectedTopic) {
            fetch(`/markdown/${selectedTopic}.md`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(text => setContent(text))
                .catch(err => {
                    console.error('Error fetching the markdown file:', err);
                    setContent('# Error\n\nUnable to load the article.');
                });
        }
    }, [selectedTopic]);

    return (
        <div className="content">
            {selectedTopic ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            ) : (
                <p>Please select a topic from the sidebar.</p>
            )}
        </div>
    );
}

export default ArticleViewer;
