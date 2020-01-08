import React, { useState } from 'react'

function HookCounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <div>
      Count: { count }
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(prevState => prevState + 5)}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo;
