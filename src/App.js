import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
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

  useEffect(() => {
    setInput(`# Welcome 'React Markdown Previewer!'

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\` 
// this is a multi-line code:
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy.

And here is a horizontal line !!!


There's also [links](https://www.linkedin.com/in/mhamad-raad), and
> Block Quotes!

And if you want to get really crazy, even tables:

- And of course, there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. you can Get Horizanl Lines:
---
1. And last but not least, let's not forget embedded images:

![Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpTun6ZJzXtt0rIiRtvI5Hdt0JwtGFxxmcA&usqp=CAU)
`);
  }, []);

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





