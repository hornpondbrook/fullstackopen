import axios from 'axios'

const getAllCountries = () => {
    const request = axios.get('https://restcountries.com/v3.1/all')
    return request.then(response => response.data)
}

const getWeather = (lat, lon, apiKey) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    return request.then(response => {
        return {
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        }
    })
}
 
const services = { getAllCountries, getWeather }
export default services