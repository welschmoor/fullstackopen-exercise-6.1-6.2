import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

import noteService from "../services/notes"



const NewNote = (props) => {
  const dispatch = useDispatch()

  const addNote = async e => {
    e.preventDefault()
    let content = e.target.newnote.value
    e.target.newnote.value = ''
    dispatch(createNote(content))
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