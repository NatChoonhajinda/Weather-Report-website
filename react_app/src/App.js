import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {
//var x = 0
 var [x, setx] = useState(0);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8888/weather_report")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log(items.day);
          console.log(items.weather);
          console.log(result.length);
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
        console.log(x +">"+(items.length))
        if(x>0)
        {
         console.log(x)
        setx(x-1)
         console.log(x)
        }
      }
    }>yesterday</button>
  </div>
  <div class="w3-display-topright w3-padding-large w3-xlarge">
    <button class="w3-button w3-teal"
    onClick={//tmr
      ()=>{
        console.log(x +"<"+(items.length))
     if(x< items.length-1)
     {
      console.log(x)
     setx(x+1)
      console.log(x)
     }
      }
    }>Tomorrow</button>
  </div>
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top">How's the Weather?</h1>
    <p  class="w3-large w3-center"> {items[x].day}</p>
    
    <p class="w3-large w3-center">Weather in current location :{items[x].weather.split('/')[0]} </p>
    <p id = "date" class="w3-large w3-center">Chance of rain :{items[x].weather.split('/')[1]}</p>
    <p id = "date" class="w3-large w3-center">Air humidity :{items[x].weather.split('/')[2]}</p>
    <p id = "date" class="w3-large w3-center">Wind : {items[x].weather.split('/')[3]}</p>
    <p id = "date" class="w3-large w3-center"></p>
</div>
    </div>
  );
}

export default App;
//{items[0].Wind}{items[0].Air_humidity} {items[0].C_of_rain}