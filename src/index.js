import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'


import App from './App'

import noteReducer from "./reducers/noteReducer"
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({ notes: noteReducer, filter: filterReducer })

const store = createStore(
  reducer,
  composeWithDevTools()
)

console.log(store.getState()) // this line is after const store =


store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))






ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)






// const renderApp = () => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

