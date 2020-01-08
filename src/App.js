import React from 'react';
import ClassCounter from './components/ClassCounter/ClassCounter';
import HookCounter from './components/HookCounter/HookCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <br />
      <HookCounter />
    </div>
  );
}

export default App;
