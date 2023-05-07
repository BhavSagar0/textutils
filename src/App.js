import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState, useEffect } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const btn2Color = "#B71C1C";
  const btn1Color = "#004D40";
  const btn3Color = "#01579B";
  const [mode, setMode] = useState("light");
  const [bgColor, setBgColor] = useState(btn1Color);
  const [isDisabled, setIsDisabled] = useState(false);
  const [btnColor, setBtnColor] = useState("blue");
  useEffect(() => {
    if (mode === "dark") {
      toggleMode("dark");
    }
  }, [bgColor]);

  const toggleMode = (clickEvent, newMode = null) => {
    debugger;
    if (newMode === null) {
      if (mode === "light") {
        switch (bgColor) {
          case btn2Color:
            setBtnColor("#FF1744");
            break;
          case btn1Color:
            setBtnColor("#1DE9B6");
            break;
          case btn3Color:
            setBtnColor("#448AFF");
            break;
          default:
            setBtnColor("blue");
        }
        setIsDisabled(true);
        setMode("dark");
        document.body.style.backgroundColor = bgColor;
      } else {
        setIsDisabled(false);
        setBtnColor("blue");
        setMode("light");
        document.body.style.backgroundColor = "white";
      }
    } else {
      setMode(newMode);
      if (newMode === "dark") document.body.style.backgroundColor = bgColor;
      else document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text Utils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          toggleBgColor={setBgColor}
          isDisabled={isDisabled}
        />
        <Alert alert="Hello there" />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  mode={mode}
                  heading="Enter the text to analyze below"
                  btnColor={btnColor}
                />
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
