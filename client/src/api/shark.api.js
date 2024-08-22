import axios from 'axios'

const sharkApi = axios.create({ // this is the api call to get all sharks from the django backend from the cors origin
    baseURL: 'http://127.0.0.1:8000/sharks/api/v1/sharks/'
})

export const getAllSharks = () => sharkApi.get('/') // this is the api call to get all sharks from the django backend from the cors origin

export const getShark = (id) => sharkApi.get(`/${id}/`) //

export const createShark = (shark) => sharkApi.post('/', shark) // this is the api call to create a shark from the django backend from the cors origin

export const deleteShark = (id) => sharkApi.delete(`/${id}/`) // this is the api call to delete a shark from the django backend from the cors origin

export const updateShark = (id, shark) => sharkApi.put(`/${id}/`, shark) // this is the api call to update a shark from the django backend from the cors origin