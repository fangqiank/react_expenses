import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransList} from './components/TransList';
import {AddTransacion} from './components/AddTransacion';
import {MyProvider} from './context/GloState';

function App() {
  return (
    <MyProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransList />
        <AddTransacion />
      </div>
    </MyProvider>
  );
}

export default App;
