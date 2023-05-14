import { useState, useEffect } from 'react'
import CountryList from './components/Country'
import Services from './services/Service'

const App = () => {

  const api_key = process.env.REACT_APP_API_KEY
  //console.log(api_key)

  const [countries, setCountries] = useState(null)
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    Services
      .getAllCountries()
      .then((countries) => {
        setCountries(countries)
      })
  }, [])

  const handleSearch = (event) => {
    setSearchName(event.target.value)
  }

  const filteredCountries = () => {
    if (searchName && countries) {
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchName.toLowerCase()))
    } else {
      return null
    }
  }

  return (
    <div>
      <div>
        find countries
        <input value={searchName} onChange={handleSearch}></input>
        {searchName
          ? <CountryList countries={filteredCountries()}></CountryList>
          : <div></div>
        }
      </div>
    </div>
  );
}

export default App;
