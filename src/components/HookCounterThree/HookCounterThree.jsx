import React, { useState } from 'react'

function HookCounterThree() {
  const initialState = {
    firstName: '',
    lastName: '',
  };
  const [name, setName] = useState(initialState);
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          placeholder="First Name"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          placeholder="First Name"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <p>Your First Name is: { name.firstName }</p>
        <p>Your Last Name is: { name.lastName }</p>
        <p>{JSON.stringify(name)}</p>
      </form>
    </div>
  )
}

export default HookCounterThree;
