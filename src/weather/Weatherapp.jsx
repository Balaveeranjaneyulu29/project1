import React, { useEffect, useState,useRef } from 'react';
import "./weatherstyle.css"
import searchicon from './searchicon.png'
import clear from './clear.png'
import humudity from './humudity.png'
import partlycloudy from './partlycloudy.png'
const Weatherapp = () => {
    const [weatherData,setWeatherData]=useState(false);
    const inputRef =useRef()

    const allIcons={
        "01d":clear,
        "01n":clear,
        "02d":clear,
        "02n":clear,
        "03d":clear,
        "03n":clear,
        "04d":humudity,
        "04n":humudity,
        "09d":partlycloudy,
        "09n":partlycloudy,
        "10d":partlycloudy,
        "10n":partlycloudy,
        "13d":partlycloudy,
        "13n":partlycloudy,
    }
    const search=async (city)=>{
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4fae19834fe94bc94c520867326118ce`;

            const response =await fetch(url);
            const data=await response.json();
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear;
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon
            })
        } catch (error) {
            
        }
    }


    useEffect(()=>{
        search("goa");
    },[])



    return (
        <div className='wa'>
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder='Search for city'></input>
                <img src={searchicon} alt="hi" onClick={()=>search(inputRef.current.value)}/>
            </div>
            <img src={weatherData.icon} className='clearimg'></img>
            <h1 className='temp'>{weatherData.temperature} c</h1>
            <h2 className='location'>{weatherData.location}</h2> 
        
            <div className='weatherdata'>
                <div className='col'>
                    <img src={humudity} ></img>
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humudity</span>
                    </div>
                </div>
                <div className='col'>
                    <img src={partlycloudy}></img>
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span>wind speed</span>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Weatherapp;
