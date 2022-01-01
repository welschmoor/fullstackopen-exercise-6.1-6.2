import { createStore } from 'redux'
import noteReducer, { createNote, toggleImportanceDispatchObj } from "./reducers/noteReducer"

import { useSelector, useDispatch } from 'react-redux'

import NewNote from "./NewNote"
import Notes from "./Notes"

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

store.dispatch({
  type: 'TOGGLE_IMPORTANCE',
  data: {
    id: 2
  }
})


const App = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state)


  const submitHandler = (e) => {
    e.preventDefault()
    const inputValue = e.target.newnote.value

    dispatch(createNote(inputValue))
    e.target.newnote.value = ''
  }

  const toggleImportance = (id) => {
    dispatch(toggleImportanceDispatchObj(id))
  }

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  )
}

export default App