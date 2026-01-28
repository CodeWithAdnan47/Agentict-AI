import "./app.css";

/* Color data (from colors.json) */
const colors = {
  gray: [
    "#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da",
    "#adb5bd","#868e96","#495057","#343a40","#212529"
  ],
  red: [
    "#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787",
    "#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"
  ],
  yellow: [
    "#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b",
    "#fcc419","#fab005","#f59f00","#f08c00","#e67700"
  ],
  green: [
    "#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c",
    "#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"
  ]
};

const labels = [50,100,200,300,400,500,600,700,800,900];

function App() {
  return (
    <div className="container">
      {Object.entries(colors).map(([name, shades]) => (
        <div key={name} className="palette">
          <h2>{name}</h2>

          <div className="grid">
            {shades.map((color, index) => (
              <div
                key={color}
                className="box"
                style={{ backgroundColor: color }}
              >
                <span>{labels[index]}</span>
                <small>{color}</small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
