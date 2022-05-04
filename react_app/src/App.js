import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/weather_report")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        }
      )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
        {items.map(item => (
          <li>
            {item.day} {item.weather}
          </li>
        ))}
      </ul>
        <a
        
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
