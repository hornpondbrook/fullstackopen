import { useState, useEffect } from 'react'
import  axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PhoneList from './components/Persons'


const App = () => {

  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3002/persons')
      .then((response) => { 
        setPersons(response.data)
       })
  }, [])

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    if (newName && newNumber) {
      if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
      } else {
        const id = persons.length + 1
        const newPersons = persons.concat({ name: newName, number: newNumber, id: id })
        setPersons(newPersons)
        setNewName('')
        setNewNumber('')
        setFilterName('')
      }
    }
  }

  const personsToShow = filterName
    ? persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
    : persons

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName}
        handleFilterName={handleFilterName}>
      </Filter>

      <h2>Add a new</h2>
      <PersonForm 
        addNewName={addNewName} 
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}>
      </PersonForm>

      <h2>Numbers</h2>
      <PhoneList persons={ personsToShow }></PhoneList>

    </div>
  )
}

export default App