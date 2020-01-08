import React from 'react';
import ClassCounter from './components/ClassCounter/ClassCounter';
import HookCounter from './components/HookCounter/HookCounter';
import HookCounterTwo from './components/HookCounterTwo/HookCounterTwo';
import './App.css';
import HookCounterThree from './components/HookCounterThree/HookCounterThree';
import HookCounterFour from './components/HookCounterFour/HookCounterFour';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <br />
      <HookCounter />
      <br />
      <HookCounterTwo />
      <br />
      <HookCounterThree />
      <br />
      <HookCounterFour />
    </div>
  );
}

export default App;
