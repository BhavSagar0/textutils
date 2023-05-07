import React, { useState } from "react";

export default function ColorSelector(props) {
  let borderRad = "70%";
  let styleVar = { borderRadius: borderRad, height: "28px", width: "15px" };
  const selectedStyle = "2px solid black";
  const unSelectedStyle = "2px solid transparent";
  const btn2Color = "#B71C1C";
  const btn1Color = "#004D40";
  const btn3Color = "#01579B";
  const [selectedBtn, setSelectedBtn] = useState("btn1");
  const handleColorChange = (btnName, color) => {
    debugger;
    setSelectedBtn(btnName);
    props.toggleBgColor(color);
  };

  return (
    <div>
      <div className={"btn-group"}>
        <button
          disabled={props.isDisabled}
          type="button"
          id="btn1"
          className="btn btn-primary mx-1"
          onClick={() => handleColorChange("btn1", btn1Color)}
          style={{
            ...styleVar,
            backgroundColor: btn1Color,
            borderColor: btn1Color,
            border: selectedBtn === "btn1" ? selectedStyle : unSelectedStyle,
          }}
        ></button>
        <button
          disabled={props.isDisabled}
          type="button"
          id="btn2"
          onClick={() => handleColorChange("btn2", btn2Color)}
          className="btn btn-primary mx-1"
          style={{
            ...styleVar,
            backgroundColor: btn2Color,
            borderColor: btn2Color,
            border: selectedBtn === "btn2" ? selectedStyle : unSelectedStyle,
          }}
        ></button>
        <button
          disabled={props.isDisabled}
          type="button"
          id="btn3"
          className="btn btn-primary mx-1"
          onClick={() => handleColorChange("btn3", btn3Color)}
          style={{
            ...styleVar,
            backgroundColor: btn3Color,
            borderColor: btn3Color,
            border: selectedBtn === "btn3" ? selectedStyle : unSelectedStyle,
          }}
        ></button>
      </div>
    </div>
  );
}
