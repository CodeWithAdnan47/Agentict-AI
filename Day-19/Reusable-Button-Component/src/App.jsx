import PropTypes from "prop-types";
import "./App.css";

/* Reusable Button Component */
function Button({
  label,
  onClickHandler,
  disabled = false,
  size = "MEDIUM",
  type = "PRIMARY",
}) {
  return (
    <button
      className={`btn ${size.toLowerCase()} ${type.toLowerCase()}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

/* PropTypes */
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["SMALL", "MEDIUM", "LARGE"]),
  type: PropTypes.oneOf(["PRIMARY", "SECONDARY", "TERTIARY"]),
};

/* App Component (Examples) */
function App() {
  return (
    <div className="container">
      <h2>Button Examples</h2>

      {/* 1. Only label */}
      <Button
        label="Default Button"
        onClickHandler={() => console.log("Default clicked")}
      />

      {/* 2. Small + Secondary */}
      <Button
        label="Small Secondary"
        size="SMALL"
        type="SECONDARY"
        onClickHandler={() => console.log("Secondary clicked")}
      />

      {/* 3. Large + Tertiary + Alert */}
      <Button
        label="Large Tertiary"
        size="LARGE"
        type="TERTIARY"
        onClickHandler={() => alert("Button clicked!")}
      />

      {/* Disabled */}
      <Button
        label="Disabled Button"
        disabled
        onClickHandler={() => {}}
      />
    </div>
  );
}

export default App;

