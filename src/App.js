import { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? "javascript"} style={dark}>
      {value ?? "nothing"}
    </SyntaxHighlighter>
  );
};

function App() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="left">
        <div className="appBar">
          <h1>Editor</h1>
        </div>
        <textarea
          type="text"
          value={input}
          onChange={handleInput}
          id="editor"
          autoFocus
        />
      </div>
      <div className="right">
        <div className="appBar">
          <h1>Preview</h1>
        </div>
        <div id="preview">
          <ReactMarkdown
            children={input}
            renderers={{
              code: Component,
            }}
          ></ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;



