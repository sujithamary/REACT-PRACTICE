import React from 'react'
import './App.css';
import Lifecycle from './ErrorHandlingAndReactLifeStyles/ComponentLifeCycle';
import ErrorBoundary from './ErrorHandlingAndReactLifeStyles/ErrorBoundary';
import TryCatch from './ErrorHandlingAndReactLifeStyles/TryCatch';
import Hero from './ErrorHandlingAndReactLifeStyles/Hero';


function App() {
  return (
    <div className="App">
      <Lifecycle/>
      <ErrorBoundary/>
      <Hero heroName = "Batman"/>
      <TryCatch/>

    </div>
  );
}

export default App;
