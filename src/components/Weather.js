import React, { useState } from 'react';
import axios from 'axios';
import './weather.css'

let favStorage = []


export const Weather = () => {
    const API = '9f35c9f77e6ec0ef94c0fdf3ff482571'


    const [mainTemp, setMainTemp] = useState('');
    const [inputCity, setInputCity] = useState('');
    const [inputValid, setInputValid] = useState('');
    const [validCity, setValidCity] = useState('');

    let formValid = 'form-control'
    let hist = JSON.parse(localStorage.getItem('history'))


    const historyInfo = (city, temp) => {
        let info = {
            "city": city,
            "temp": temp,
        }
        localStorage.setItem('history', JSON.stringify(info))
    }


    const getWeather = async (inputCity) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API}`);
            setMainTemp(Math.round(response.data.main.temp - 273))
            setInputValid('is-valid')
            setValidCity(inputCity);
            document.querySelector('.btn-success').removeAttribute('disabled')
            historyInfo(response.data.name, Math.round(response.data.main.temp - 273))
            hist = JSON.parse(localStorage.getItem('history'))
        } catch (error) {
            console.error(error);
            setInputValid('is-invalid')
        }
    }


    const submitForm = (event) => {
        event.preventDefault()
        getWeather(inputCity)
    }

    let fav = JSON.parse(localStorage.getItem('favorites'))

    const addFavorites = () => {
        document.querySelector('.btn-success').setAttribute("disabled", "disabled")
        favStorage.push(validCity)
        localStorage.setItem('favorites', JSON.stringify(favStorage))
        fav = JSON.parse(localStorage.getItem('favorites'))
        setInputCity(inputCity + ' ')
    }



    const btnFav = (e) => {
        let value = e.target.dataset.item
        getWeather(value)
    }


    // city {validCity} , Temp: {mainTemp}

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" className={formValid + ' ' + inputValid}
                    placeholder="city"
                    onChange={(event) => setInputCity(event.target.value)}
                    value={inputCity}
                >

                </input>
            </form>


            <div className="card">City: {validCity} , Temp: {mainTemp}
            </div>


            {hist !== null
                ? <div className="card"> previous request: <br />
                City: {hist.city} , Temp: {hist.temp}
                </div>
                : ``
            }


            <button className={`btn btn-success btn-sm`} onClick={addFavorites}> Add city to Favorites</button>


            <div className="favorites">
                Favorites:
                <br />
                {fav !== null ?
                    fav.map((item, index) => (
                        <button className="btn btn-primary" onClick={(e) => { btnFav(e) }} data-item={item} key={index}>{item}</button>
                    ))
                    : 'Empty'}
            </div>
        </div>
    )
}

