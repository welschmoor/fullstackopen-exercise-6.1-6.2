import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from './reducers/noteReducer'




const NewNote = (props) => {
  const dispatch = useDispatch()

  const addNote = e => {
    e.preventDefault()
    let content = e.target.newnote.value
    dispatch(createNote(content))
    e.target.newnote.value = ''
  }

  return (
    <form onSubmit={addNote}>
      <label htmlFor="newnote">Add new note:</label>
      <input type="text" id="newnote" name="newnote" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote