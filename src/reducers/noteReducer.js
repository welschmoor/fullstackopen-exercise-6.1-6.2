

export const createNote = noteContent => {
  const newNote = {
    content: noteContent,
    important: false,
    id: Math.floor(Math.random() * 100000),
  }
  return { type: 'NEW_NOTE', data: newNote }
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

const noteReducer = (state = initialState.notes, action) => {
  if (action.type === 'NEW_NOTE') {
    return [...state, action.data]
  }
  else if (action.type === 'TOGGLE_IMPORTANCE') {
    const noteInQ = state.find(e => e.id === action.data.id)
    return [...state.filter(e => e.id !== action.data.id), { ...noteInQ, important: !noteInQ.important }]
  }
  return state
}


export default noteReducer