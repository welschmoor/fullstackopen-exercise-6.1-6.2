import { createStore } from 'redux'

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'ZERO':
      return { ...state, count: 0 }
    default:
      return state
  }
}

function App() {
  const store = createStore(counterReducer)
  store.subscribe(() => {
    const storeNow = store.getState()
    console.log(storeNow)
  })

  return (
    <div>
      App
      {store.getState().count}
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

export default App;
