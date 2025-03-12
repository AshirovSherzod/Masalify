import { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [code, setCode] = useState("// Bu yerda kod yozing...");

  return (
    <div style={{ height: "100vh", padding: "20px", background: "#1e1e1e" }}>
      <Editor
        height="500px"
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default CodeEditor;
