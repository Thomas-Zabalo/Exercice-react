// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/reducers';
import Home from './pages/Home';
import PersonDetails from './pages/PersonDetails';
import './App.css';

// Création du store Redux
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <nav>
            <h1>People Management App</h1>
            <Link to="/">Home</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<PersonDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
