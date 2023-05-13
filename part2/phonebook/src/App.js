import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PhoneList from './components/Persons'
import PersonsService from './services/persons'


const App = () => {

  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    PersonsService
      .getAll()
      .then((persons) => {
        setPersons(persons)
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
      const personToReplace = persons.find((person) => person.name === newName)
      if (personToReplace) {
        if (window.confirm(`${personToReplace.name} is already added to phonebook, replace the old number with a new one?`)) {
          PersonsService
            .replace(personToReplace.id, { name: personToReplace.name, number: newNumber })
            .then((replacedPerson) => {
              setPersons(persons.map(person => person.id === personToReplace.id ? replacedPerson : person))
              setNewName('')
              setNewNumber('')
              setFilterName('')
            })
        }
      } else {
        PersonsService
          .create({ name: newName, number: newNumber })
          .then((newPerson) => {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
            setFilterName('')
          })
      }
    }
  }

  const handleDelete = (id) => {
    console.log("to delete ", id)
    const person = persons.find((person) => person.id === id)

    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      PersonsService
        .remove(id)
        .then((response) => {
          console.log(response)
          setPersons(persons.filter(person => person.id !== id))
        })
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
      <PhoneList
        handleDelete={handleDelete}
        persons={personsToShow}>
      </PhoneList>

    </div>
  )
}

export default App