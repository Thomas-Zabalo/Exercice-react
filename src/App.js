// App.js
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './app/reducers';
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestion des Personnes avec Redux</h1>
        <PersonForm />
        <PeopleList />
      </div>
    </Provider>
  );
}

export default App;
