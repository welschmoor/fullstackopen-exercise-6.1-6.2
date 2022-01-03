import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'
import store from "./redux/store"

import App from './App'




// console.log(store.getState()) // this line is after const store =

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)






// const renderApp = () => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

