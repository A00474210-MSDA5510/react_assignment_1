import "../App.css";
import img from '../hoodriver.jpg'
import coldImg from '../cold.png'
import sunnyImg from '../sunny.png'
import mildImg from '../mild.png'
import { useEffect, useState } from "react";


function ParseData (){
const [data, setData] = useState(null);
// Define a state variable to track loading state
const [loading, setLoading] = useState(true);
// Define a state variable to track any errors
const [error, setError] = useState(null);
const fetchData = async () => {
    try {
      // Make an API request
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f897fe30ef6a49a88df40434233110&q=Hood River`
      );
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response)
      // Parse the response data as JSON
      const responseData = await response.json();
      // Update the 'data' state with the fetched data
      setData(responseData);
      // Set 'loading' to false since the data has been loaded
      setLoading(false);
    } catch (error) {
      // Handle any errors that occur during the fetch
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    // Call the fetchData function
    fetchData();
  }, []);

  if(loading){
    return <p>loading...</p>
  }


  let img;
  let temp;
  temp = data.current.temp_c
  if (temp <= 10){
      img = coldImg
  } else if(temp < 20){
      img = mildImg
  } else if (temp >= 20){
      img = sunnyImg
  }
  return (
    <div>
      <h1>Current Weater</h1>
      <ul>
      <li id = "temp">current tempture in hood river is {data.current.temp_c}C</li>
        <img src = {img}></img>
        <button
        id = "toggleButton"
        onClick={() => {
          const button = document.getElementById("toggleButton");
          const temp_text = document.getElementById("temp")
          const currentState = button.textContent;

          if (currentState === "Show Celsius") {
            button.textContent = "Show Fahrenheit";
            temp_text.textContent = "current tempture in hood river is " + data.current.temp_c + "C"
          } else {
            button.textContent = "Show Celsius";
            temp_text.textContent = "current tempture in hood river is " + data.current.temp_f + "F"
          }
        }}
      >
        Show Fahrenheit
      </button>
      </ul>
    </div>
  );
}



function HomeTown() {
  return (
    <div className="App">
        <img src={img}  style={{ width: '900px', height: '600px' }} />
      <h1>About Hood River</h1>
      <p>
        I spend my teen year in Hood River Oregon, most of my good memories were made there, and it is one of the most 
        beautiful town I have ever been to, one day, I even know most of the people who live there, I still got family and
        friends down there, one day I'd like to return. 
      </p>
      {ParseData()}
    </div>
  );
}

export default HomeTown;
