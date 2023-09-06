import React from 'react';
import useLocalStorage from './useLocalStorage';
import {marked} from 'marked';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useLocalStorage('markdown', ''); // Use a different key, e.g., 'markdownContent'

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleSave = () => {
    // Save the content to local storage with a different key
    setMarkdown(markdown);
  };

  const handleClear = () => {
    // Clear the content from local storage
    setMarkdown('');
  };

  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Enter your Markdown content here..."
      />
      <div>
        <button
          onClick={handleSave}
          aria-label="Save Markdown Content" // Add an accessible label
        >
          Save
        </button>
        <button
          onClick={handleClear}
          aria-label="Clear Markdown Content" // Add an accessible label
        >
          Clear
        </button>
      </div>
      <div>
        <h2>Preview</h2>
        <div
          aria-label="Markdown Preview" // Add an accessible label
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default MarkdownEditor;
