// App.js
import React from 'react';
import './App.css';
import Home from './pages/Home';
import PersonDetails from './pages/PersonDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  return (
    // <PersonProvider>
    //   <div className="App">
    //     <header className="App-header">
    //       <h1>People Management</h1>
    //       <AddPerson />
    //       <PersonList />
    //     </header>
    //   </div>
    // </PersonProvider>


    <div className="App">
      <header className="App-header">
        <h1>Navigation</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home people={people} />} />
            <Route path="/detail/:id" element={<PersonDetails people={people}/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
