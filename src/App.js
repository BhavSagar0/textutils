import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils"/>
    <div className="container my-3">
    {/* <TextForm heading="Enter the text to analyze below"/> */}
    <About/>
    </div>
    
    </>
  );
}

export default App;
