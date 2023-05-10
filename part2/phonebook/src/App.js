import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PhoneList from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleFilterName = (event) => {
    const curFilterName = event.target.value
    setFilterName(curFilterName)
    if (curFilterName.length > 0) {
      setPersonsToShow(persons.filter((person) => {
        return person.name.toLowerCase().includes(curFilterName.toLowerCase())
      }))
    } else {
      setPersonsToShow(persons)
    }
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
        setPersonsToShow(newPersons)
        setNewName('')
        setNewNumber('')
        setFilterName('')
      }
    }
  }

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
      <PhoneList persons={personsToShow}></PhoneList>

    </div>
  )
}

export default App