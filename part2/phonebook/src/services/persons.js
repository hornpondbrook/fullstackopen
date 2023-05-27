import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const create = (person) => {
    const request = axios.post(baseUrl, person)
    return request.then((response) => response.data)
}

const remove = (id) => {
    const url = `${baseUrl}/${id}`
    const request = axios.delete(url)
    return request
}

const replace = (id, replacedData) => {
    const url = `${baseUrl}/${id}`
    const request = axios.put(url, replacedData)
    return request.then(response => response.data)
}

const personsService = { getAll, create, remove, replace }

export default personsService