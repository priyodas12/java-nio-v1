import React from 'react';
import logo from './logo.svg';
import './App.css';
//for named export,have to import with exact same name
import { FunctionalComponent } from './components/FunctionalComponent'
//for generic case we can mention any name
//import SayHello from './components/FunctionalComponent'

function App() {
  return (
    <div className="App">
      {/*<SayHello />*/}
      <FunctionalComponent />
    </div>
  );
}

export default App;
