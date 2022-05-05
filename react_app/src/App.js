import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const date = new Date();
  const [x,setX]= useState(0);
  date.setDate(date.getDate()+x)
  const [showdate,setShowDate]=useState(days[date.getDay()] +"  "+date.getDate()+"   "+ months[date.getMonth()] + "  "+date.getFullYear());
  
   console.log(days[date.getDay()] +"  "+date.getDate()+"   "+ months[date.getMonth()] + "  "+date.getFullYear())

/*  var date = new Date()
  document.getElementById("yesterday").onclick = ()=>{
      date.setDate(date.getDate()-1)
      document.getElementById("date").innerHTML = date;  
  };
  document.getElementById("tomorrow").onclick = ()=>{
      date.setDate(date.getDate()+1)
      document.getElementById("date").innerHTML = date;  
  };
  document.getElementById("date").innerHTML = date;
  */
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
    <div className="App" class = "App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

  <div class="w3-display-topleft w3-padding-large w3-xlarge">
    <button class="w3-button w3-teal" 
    onClick={
      ()=>{
      setX(x-1)
      setShowDate(days[date.getDay()] +"  "+date.getDate()+"   "+ months[date.getMonth()] + "  "+date.getFullYear())
      }
    }>yesterday</button>
  </div>
  <div class="w3-display-topright w3-padding-large w3-xlarge">
    <button class="w3-button w3-teal"
    onClick={
      ()=>{
      setX(x+1)
      setShowDate(days[date.getDay()] +"  "+date.getDate()+"   "+ months[date.getMonth()] + "  "+date.getFullYear())
      }
    }>Tomorrow</button>
  </div>
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top">Weather Report</h1>
    <p  class="w3-large w3-center">{showdate} </p>
    
    <p class="w3-large w3-center">Weather in current location : </p>
    <p id = "date" class="w3-large w3-center">Chance of rain :</p>
    <p id = "date" class="w3-large w3-center">Air humidity : </p>
    <p id = "date" class="w3-large w3-center">Wind : </p>
</div>
    </div>
  );
}

export default App;
