import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceDispatchObj } from '../reducers/noteReducer'
import noteService from '../services/notes'




const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => {
    if (state.filter === 'ALL') {
      return state.notes
    }
    return state.filter === 'IMPORTANT'
      ? state.notes.filter(note => note.important)
      : state.notes.filter(note => !note.important)
  })

  const toggleImportanceHandler = async (note) => {
    await noteService.toggleImportantsAxios(note)
    dispatch(toggleImportanceDispatchObj(note.id))
  }

  return (
    <ul>
      {notes.sort((a, b) => a.id - b.id).map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() =>
            toggleImportanceHandler(note)
          }
        />
      )}
    </ul>
  )
}

export default Notes