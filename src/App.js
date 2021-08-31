import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.jsx'
import UnsafeScriptsWarning from "./components/UnsafeScriptsWarning";

function App() {
  const[hasError, sethasError] = useState(false);
  const[showSpinner, setshowSpinner] = useState(true);

  const getDerivedStateFromError = (error) => {
    console.log('some error has occured');
    return { hasError: true };
  }

  const hideSpinner = () => {
   setshowSpinner(false);
  }

  if (hasError) {
      return <UnsafeScriptsWarning />
  }
  return (
    <div>
       <div className="App">
        <Dashboard hideSpinner={hideSpinner} showSpinner={showSpinner} />
      </div>     
    </div>
  )
}

export default App;
