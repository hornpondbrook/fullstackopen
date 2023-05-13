const Phone = ({ person, handleDelete }) => {
    return (
        <li className='note'>
            {person.name}: {person.number}
            <button onClick={handleDelete}>delete</button>
        </li>
    )
}

const PhoneList = ({ persons, handleDelete }) => {

    return (
        <ul>
            {persons.map((person) =>
                <Phone 
                    key={person.id} 
                    person={person}
                    handleDelete={ () => handleDelete(person.id) }>
                </Phone>
            )}
        </ul>
    )
}

export default PhoneList