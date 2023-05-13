const Phone = ({ person }) => {
    return <li>{person.name} {person.number}</li>
}

const PhoneList = ({ persons }) => {

    return (
        <ul>
            {persons.map((person) =>
                <Phone key={person.id} person={person}></Phone>
            )}
        </ul>
    )
}

export default PhoneList