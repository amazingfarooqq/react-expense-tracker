import react, { useState } from 'react';
import { AddNewTransaction } from './components/AddNewTransaction';
import { CurrentBalance } from './components/CurrentBalance';
import { Header } from './components/Header';
import { TransactionAmount } from './components/TransactionAmount';
import { TransactionHistory } from './components/TransactionHistory';
import './index.css'

const App = () => {






  return (
    <>
      <div className='container'>

        <Header />

        <CurrentBalance />

        <TransactionAmount />

        <TransactionHistory />

        <AddNewTransaction />


      </div>

    </>
  )
}

export default App;