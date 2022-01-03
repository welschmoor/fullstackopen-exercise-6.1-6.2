import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const create = async (notecontent) => {
  const newNote = {
    content: notecontent,
    important: false,
  }
  const response = await axios.post(baseURL, newNote)
  return response.data
}

const toggleImportantsAxios = async (note) => {
  const updatedNote = {
    content: note.content,
    important: !note.important,
    id: note.id,
  }
  const response = await axios.put(`${baseURL}/${note.id}`, updatedNote)
  return response.data
}

export default { getAll, create, toggleImportantsAxios }