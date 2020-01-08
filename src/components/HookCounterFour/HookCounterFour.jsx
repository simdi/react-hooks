import React, { useState } from 'react';

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      name: Math.random().toString(36).substring(7)
    }]);
  }

  return (
    <div>
      <button onClick={addItem}>Add Name</button>
      <h4>List of items</h4>
      <ul>
        {
          (items.length > 0) ? items.map((item, index) => (
            <li key={item.id}>{ item.name }</li>
          )) : <li>There are no items to display.</li>
        }
      </ul>
    </div>
  )
}

export default HookCounterFour;
