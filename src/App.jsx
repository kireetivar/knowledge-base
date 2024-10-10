import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import TopicList from './components/TopicList';
import ArticleViewer from './components/ArticleViewer';
import './styles/styles.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div>
      <header>
        <h1>My Knowledge Base</h1>
        <DarkModeToggle />
      </header>
      <div className="container">
        <TopicList onSelect={setSelectedTopic} />
        <ArticleViewer selectedTopic={selectedTopic} />
      </div>
    </div>
  );
}

export default App;