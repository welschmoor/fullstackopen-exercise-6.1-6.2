import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import noteReducer from "./reducers/noteReducer"
import App from './App'

import { createStore } from 'redux'

const store = createStore(noteReducer)

const renderApp = () => {ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)}





// const renderApp = () => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

renderApp()
store.subscribe(renderApp)