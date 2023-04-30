import logo from './logo.svg';
import './App.css';

let name = "Bhavi";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <div className="container">
      <p>Hello {name}
      </p>

    </div>
    </>
  );
}

export default App;
