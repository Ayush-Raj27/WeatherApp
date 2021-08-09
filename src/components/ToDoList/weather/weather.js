import React ,{useEffect, useState} from'react';
import "./weather.css";
import WeatherCard  from './WeatherCard';


const Weather = () => {

    const [searchData , setSearchData] = useState("Kolkata");
    const [weatherData, setWeatherData] = useState({});

    // const { name  } = weatherData.main;
    // console.log(name);

    const weatherInfo = async ()=>{

        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=7354a421abd524c87dc4e8cbad05998d`;
            const weatherReport = await fetch(url);
            const data = await weatherReport.json();
            const {temp,humidity, pressure} = data.main;
            const { main:weatherMood } = data.weather[0];
            const { name:place } = data;
            const { speed } = data.wind;
            const {country ,sunrise} = data.sys;

            const myWeatherInfo ={
                temp,humidity, pressure,
                weatherMood,
                place,speed,
                country ,sunrise
            }
            console.log(myWeatherInfo);
            setWeatherData(myWeatherInfo);
            console.log(temp);
        }
        catch(err){
            console.log(err);
        }
       
    }

    useEffect( () =>{weatherInfo()
    },[])
    return (
        <>
            <div className = "wrap">
                <div className = "search">
                    <input type = "search"
                        placeholder = "search..."
                        autoFocus
                        id = "search"
                        className = "searchTerm"
                        onChange = {(eve) =>setSearchData(eve.target.value)}
                    />
                    <button className = "searchButton" type = "button" onClick = { weatherInfo }>
                        Search 
                    </button>
                </div>
            </div>

            {/* our weather card */}
            <WeatherCard  weatherInfo = {weatherData}/>
            
        </>
    )
}

export default Weather
