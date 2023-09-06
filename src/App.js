import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import DocsTab from './DocsTab'; // Import the DocsTab component

function App() {
  const [activeTab, setActiveTab] = useState('editor');

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('editor')}>Editor</button>
        <button onClick={() => setActiveTab('docs')}>Docs</button>
      </div>
      <div className="tab-content">
        {activeTab === 'editor' && <MarkdownEditor />}
        {activeTab === 'docs' && <DocsTab />}
      </div>
    </div>
  );
}

export default App;