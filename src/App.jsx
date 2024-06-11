import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const apiKey = 'd26d63f3bdfe459febb298dc8264dd22';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      }).catch((error) => {
        console.error("Error fetching the weather data", error);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="search">
          <input 
            onChange={(event) => setLocation(event.target.value)} 
            onKeyDown={searchLocation} 
            value={location} 
            type="text" 
            placeholder="Enter Your City"
          />
        </div>

        {data ? (
          <>
            <div className="top">
              <div className="location">
                <h4>{data.name}</h4>
              </div>

              <div className="temp">
                <h1>{Math.round(data.main.temp)}°C</h1>
              </div>

              <div className="description">
                <h6>{data.weather[0].description}</h6>
              </div>
            </div>

            <div className="bottom">
              <div className="feels">
                <h5>{Math.round(data.main.feels_like)}°C</h5>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                <h5>{data.main.humidity}%</h5>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <h5>{Math.round(data.wind.speed * 3.6)} km/h</h5>
                <p>Wind</p>
              </div>
            </div>
          </>
        ) : (
          <div className="nodata">
            <p>Please enter a city name and press Enter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;


// import React, {useState } from "react";
// import axios from 'axios';

// const App = () => {

//   let [data,setdata]= useState(null);
//   let [location,setLocation]= useState('london');
//   let url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d26d63f3bdfe459febb298dc8264dd22`

// // console.log(data);
// let searchLocation = (event)=>{
//   if(event.key === 'Enter'){
    
//       axios.get(url).then((response) => {
//         setdata(response.data)
//         console.log(response.data.name)
//       })
//       setLocation('')
//   }
// }


//   return (
//     <div className="app">
    
//       <div className="container">
//       <div className="search">
//       <input onChange={event=>setLocation(event.target.value)} onKeyDown={searchLocation} value={location} type="text" placeholder="Enter Your City"/>
    
//     </div>

//         <div className="top">

//           <div className="location">
//             {data =!null?<h1>${data.name}</h1>:null}

//           </div>

//           <div className="temp">
//             {/* {data =!null?<h1>{data.main.temp}</h1>:null} */}
//           </div>
//           <div className="description">
//             <h6>Clouds</h6>
//           </div>
//         </div>

//         <div className="bottom">
//           <div className="feels">
//             <h5>25°F</h5>
//             <h5>Feels Like</h5>
//           </div>
//           <div className="humidity">
//             <h5>20%</h5>
//             <h5>Humidity</h5>
//           </div>
//           <div className="wind">
//             <h5>20MPH</h5>
//             <h5>Wind</h5>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default App;
