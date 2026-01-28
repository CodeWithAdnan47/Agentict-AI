import { useState } from 'react';
import "./App.css";

/* Language data */
const languageDetails = {
  JavaScript:
    "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification.",
  Python:
    "Python is an interpreted, high-level, general-purpose programming language known for its simple syntax and readability.",
  Ruby:
    "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity.",
  Java:
    "Java is a class-based, object-oriented programming language designed to have minimal implementation dependencies.",
  CSharp:
    "C# is a modern, object-oriented, and type-safe programming language developed by Microsoft.",
  Go:
    "Go is a statically typed, compiled programming language designed at Google, known for performance and simplicity.",
};

function Header() {
  return <h1 className="header">Programming Languages</h1>;
}

function ButtonContainer({ onSelect }) {
  return (
    <div className="button-container">
      {Object.keys(languageDetails).map((lang) => (
        <button key={lang} onClick={() => onSelect(lang)}>
          {lang}
        </button>
      ))}
    </div>
  );
}

function DisplayArea({ text }) {
  return (
    <div className="display-area">
      {text ? <p>{text}</p> : <p>Select a language to see details</p>}
    </div>
  );
}

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div className="app">
      <Header />

      <div className="content">
        <ButtonContainer onSelect={setSelectedLanguage} />
        <DisplayArea text={languageDetails[selectedLanguage]} />
      </div>
    </div>
  );
}

