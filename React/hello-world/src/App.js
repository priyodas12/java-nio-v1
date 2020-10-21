import React from 'react';
import logo from './logo.svg';
import './App.css';
//for named export,have to import with exact same name within {}
import { FunctionalComponent } from './components/FunctionalComponent'
//for generic case we can mention any name
//import SayHello from './components/FunctionalComponent'
import { Jsxelement } from './components/JSXElement'
import ClassComponent from './components/ClassComponent'
import { PropsDemo } from './components/PropsDemo'

function App() {
  return (
    <div className="App">
      {/*<SayHello />*/}
      <FunctionalComponent />
      <ClassComponent />
      <Jsxelement ></Jsxelement>
      <PropsDemo name='abc' date='12-12-2018' />
      <PropsDemo name='dec' date='23-02-2009' />
    </div>
  );
}

export default App;
