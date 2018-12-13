import * as React from 'react';
import { ContextOne } from './ContextOne';

export function App() {
  let { state, dispatch } = React.useContext(ContextOne)
  React.useEffect(() => {
    document.body.style.backgroundColor = state.currentColor
  }, [state.currentColor])

  let inc = () => dispatch({ type: 'increment'})
  let dec = () => dispatch({ type: 'decrement'})
  let reset = () => dispatch({ type: 'reset'})
  let setColor = (color) => dispatch({ type: 'set-color', payload: color})

  return (
    <React.Fragment>
      <div style={{textAlign: 'center'}}>
        <p>
          Current color is: <b>{state.currentColor}</b>
        </p>
        <p>
          Current count is: <b>{state.count}</b>
        </p>
      </div>
      <div style={{paddingTop: 40}}>
        <p>Count controllers:</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
      <div style={{paddingTop: 40}}>
        <p>Color controllers:</p>
        <button onClick={setColor('green')}>Change to green</button>
        <button onClick={setColor('blue')}>Change to blue</button>
      </div>
      <div style={{paddingTop: 40}}>
        <p>Reset changes:</p>      
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  )

}
