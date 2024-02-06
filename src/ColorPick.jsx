import { useState } from "react";

function ColorPick() {
  const [color, setColor] = useState("#000000");

  const styleBigDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const styleDiv = {
    backgroundColor: color,
    width: "200px",
    height: "200px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const styleInput = {
    backgroundColor: color,
    width: "100px",
    height: "30px",
    cursor: "pointer",
  };

  const handelColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div style={styleBigDiv}>
      <h1>Color Picker</h1>
      <div style={styleDiv}>
        <h2>{color}</h2>
      </div>
      <h3>Select Color</h3>
      <input style={styleInput} type="color" onChange={handelColor} />
    </div>
  );
}

export default ColorPick;
