import './App.css';
import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButton';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <CounterProvider>
      <div className='app'>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}

export default App;

