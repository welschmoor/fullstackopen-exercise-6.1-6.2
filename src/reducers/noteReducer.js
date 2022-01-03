import noteService from "../services/notes"

// export const createNote = note => {
//   return { type: 'NEW_NOTE', data: note }
// }

export const createNote = content => {
  return async dispatch => {
    const newNote = await noteService.create(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote,
    })
  }
}

export const toggleImportanceDispatchObj = id => {
  return { type: "TOGGLE_IMPORTANCE", data: { id: id } }
}

const initialState = {
  notes: [
    { content: 'reducer defines how redux store works', important: true, id: 1 },
    { content: 'state of store can contain any data', important: false, id: 2 }
  ],
  filter: 'IMPORTANT'
}

const noteReducer = (state = [], action) => {
  if (action.type === 'NEW_NOTE') {
    return [...state, action.data]
  }
  else if (action.type === 'TOGGLE_IMPORTANCE') {
    const noteInQ = state.find(e => e.id === action.data.id)
    return [...state.filter(e => e.id !== action.data.id), { ...noteInQ, important: !noteInQ.important }]
  } else if (action.type === 'INIT_NOTES') {
    return action.data
  }

  return state
}

// export const initializeNotes = (notes) => {
//   return {
//     type: 'INIT_NOTES',
//     data: notes,
//   }
// }

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}

export default noteReducer