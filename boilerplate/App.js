import './App.css';
import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButton';
// import { ? } from './context/CounterContext';

function App() {
  return (
    //wrap the div in context provider
      <div className='app'>
        <CounterDisplay />
        <CounterButtons />
      </div>
  );
}

export default App;

