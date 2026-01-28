import "./app.css";

function App() {

  /* ===== Exercise 1: Simple Click Event ===== */
  const handleWelcome = () => {
    alert("Welcome to React Events");
  };

  /* ===== Exercise 2: Multiple Alerts ===== */
  const handleAssistance = () => {
    alert("Visit the official React documentation at https://reactjs.org");
    alert("Understand the collaboration between React and ReactDOM");
    alert("Learn how JSX is transformed by Babel");
  };

  /* ===== Exercise 3: Unified Event Handling ===== */
  const handleNameClick = (name) => {
    alert(`Hello ${name}`);
  };

  /* ===== Exercise 4: Dynamic Buttons from Data ===== */
  const vegetables = [
    { id: 'carrot', value: '🥕 carrot' },
    { id: 'tomato', value: '🍅 tomato' },
    { id: 'pepper', value: '🌶️ pepper' },
    { id: 'lettuce', value: '🥬 lettuce' },
  ];

  const handleVegetableClick = (veg) => {
    alert(veg);
  };

  return (
    <div className="container">
      <h1>React Events Practice</h1>

      {/* Exercise 1 */}
      <section>
        <h2>Simple Click Event</h2>
        <button onClick={handleWelcome}>Press Here</button>
      </section>

      {/* Exercise 2 */}
      <section>
        <h2>Multiple Alerts</h2>
        <button onClick={handleAssistance}>Need Assistance?</button>
      </section>

      {/* Exercise 3 */}
      <section>
        <h2>Unified Event Handler</h2>
        <button onClick={() => handleNameClick("Sansa")}>Sansa</button>
        <button onClick={() => handleNameClick("Robb")}>Robb</button>
        <button onClick={() => handleNameClick("Rickon")}>Rickon</button>
      </section>

      {/* Exercise 4 */}
      <section>
        <h2>Vegetables</h2>
        {vegetables.map((veg) => (
          <button
            key={veg.id}
            onClick={() => handleVegetableClick(veg.id)}
          >
            {veg.value}
          </button>
        ))}
      </section>
    </div>
  );
}

export default App;
