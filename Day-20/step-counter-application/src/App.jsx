import { useState } from 'react';
import "./App.css";

export default function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Step state (null means default = 1)
  const [step, setStep] = useState(null);

  // Get current step value
  const currentStep = step || 1;

  function increment() {
    setCount(prev => prev + currentStep);
  }

  function decrement() {
    setCount(prev => prev - currentStep);
  }

  function reset() {
    setCount(0);
    setStep(null);
  }

  return (
    <div className="app">
      <h1>Count: {count}</h1>

      <h2>Steps</h2>

      <div className="steps">
        {[5, 10, 15].map(value => (
          <button
            key={value}
            className={step === value ? "active" : ""}
            onClick={() => setStep(value)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="actions">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}


//export default App
