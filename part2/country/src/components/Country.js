import { useState, useEffect } from 'react'
import Services from '../services/Service'

const CountryDetail = ({ country, show }) => {
  const [weather, setWeather] = useState(null)

  if (!show) {
    return null
  } else {
    Services
        .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1], process.env.REACT_APP_API_KEY)
        .then((weather) => {
            setWeather({
                temp: weather.temp,
                wind: weather.wind,
                icon: weather.iconUrl
            })
        })
        .catch(error => {
            alert(error)
        })
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h3>languages</h3>
        <ul>
          {Object.values(country.languages).map((language) => {
            return <li key={language}>{language}</li>
          })}
        </ul>
        <div>
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
        {weather
        ? <div>
            <h3>weather in {country.capital}</h3>
            <div>temperature {weather.temp} Celcius</div>
            <img src={weather.icon} />
            <div>wind {weather.wind} m/s</div>
          </div>
        : <div></div>
        }
      </div>
    )
  }
}

const CountryItem = ({ country }) => {
  const [showCountry, setShowCountry] = useState(false)

  return (
    <div>
      {country.name.common}
      <button onClick={() => setShowCountry(!showCountry)}>{showCountry ? 'hide' : 'show'}</button>
      <CountryDetail country={country} show={showCountry}></CountryDetail>
    </div>
  )
}

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else {
    return (
      countries.map(country => 
        <CountryItem 
          key={country.name.common}
          country={country}>
        </CountryItem>)
    )
  }
}

export default CountryList