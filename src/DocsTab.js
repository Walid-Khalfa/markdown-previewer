import React, { useEffect, useState } from 'react';

function DocsTab() {
  // State to store the fetched Markdown content
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Define the API URL with the proxy path
    const apiUrl = '/api/v1/';

    // Fetch Markdown content from the API using the proxy
    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        // Set the fetched Markdown content in the component's state
        setMarkdownContent(data);
      })
      .catch((error) => {
        console.error('Error fetching Markdown content:', error);
      });
  }, []);

  return (
    <div>
      <h2>Docs</h2>
      {/* Render the fetched Markdown content here */}
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </div>
  );
}

export default DocsTab;
