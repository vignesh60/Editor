// ParentComponent.js

import React from 'react';
import Editor from './Editor';

const ParentComponent = () => {
  // Define a function to handle HTML code changes
  const handleHtmlCodeChange = (newHtmlCode) => {
    console.log('New HTML code:', newHtmlCode);
    // Perform any actions with the new HTML code, such as updating state
  };

  return (
    <div>
      <Editor onHtmlCodeChange={handleHtmlCodeChange} />
    </div>
  );
};

export default ParentComponent;
