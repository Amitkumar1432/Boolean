import React, { useState } from "react";
import "./App.css"; // Assuming you have a CSS file named "styles.css" in the same directory

function App() {
  const [counter, setCounter] = useState(0);
  const [circleColor, setCircleColor] = useState("green");
  const [circleShape, setCircleShape] = useState("circle");
  const [buttonColor, setButtonColor] = useState(false);

  const handleButtonClick = () => {
    setCounter((prevCounter) => prevCounter + 1);

    // Change background color of the inner circle based on counter value
    if (counter % 2 === 0) {
      setCircleColor("yellow");
    } else {
      setCircleColor("red");
    }

    // Change shape of the outer circle based on counter value
    if (counter % 2 === 0) {
      setCircleShape("circle square");
    } else {
      setCircleShape("circle");
    }

    // Toggle button background color based on buttonColor state
    setButtonColor((prevButtonColor) => !prevButtonColor);
  };

  return (
    <div>
      <div id="circleContainer">
        <div id="circle" className={circleShape}>
          <div
            id="circleInner"
            className="circle-inner"
            style={{ backgroundColor: circleColor }}
          >
            <span id="innerCounter">{counter}</span>
          </div>
        </div>
      </div>
      <button
        id="myButton"
        onClick={handleButtonClick}
        style={{ backgroundColor: buttonColor ? "red" : "blue" }}
      >
        Change color
      </button>
    </div>
  );
}

export default App;
