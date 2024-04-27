// Editor.js

import React, { useRef, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"; // Import language tools extension
import img1 from "./images/img1.jpg"

const Editor = ({ onHtmlCodeChange }) => {
  const [htmlCode, setHtmlCode] = useState("");
  const outputWindowRef = useRef(null);

  const handleChange = (newHtmlCode) => {
    setHtmlCode(newHtmlCode);
    updateOutputPage(newHtmlCode); // Pass the HTML code to the parent component
  };

  const handleShowOutput = () => {
    const outputWindow = window.open();
    if (outputWindow) {
      outputWindow.document.write(htmlCode);
      outputWindowRef.current = outputWindow;
    } else {
      alert('Popup blocked. Please allow popups to view the output.');
    }
  };

  const updateOutputPage = (newHtmlCode) => {
    if (outputWindowRef.current) {
      outputWindowRef.current.document.open();
      outputWindowRef.current.document.write(newHtmlCode);
      outputWindowRef.current.document.close();
    }
  };

  return (
    <div className="editor-with-console">
      <div className="editor">
        <AceEditor
          mode="html"
          theme="github"
          onChange={handleChange}
          value={htmlCode}
          fontSize={17}
          width="100%"
          height="100vh"
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
          }} // Enable auto-completion
        />
      </div>
      <div className="output">
        <h2>Output</h2>
      </div>
      <button onClick={handleShowOutput}>Show Output in New Tab</button>
    </div>
  );
};

export default Editor;
