import React from 'react'
import { useGlobalContext } from '../context'

export const TransactionAmount = () => {

  const { transactions } = useGlobalContext()

  const transactionAmount = transactions.map(item => item.amount)


  const income = transactions.map(item => item.amount)
    .filter(transactions => transactions > 0)
    .reduce((acc, transactions) => {
      return acc += +transactions
    }, 0).toFixed(0)


  const expense = transactions.map(item => item.amount)
    .filter(transactions => transactions < 0)
    .reduce((acc, transactions) => {
      return acc += +transactions
    }, 0).toFixed(0)


  return (

    <div className='transaction_amount'>

      <div className='bg-dark income'>
        <h4 className='p-0 m-0'>INCOME</h4>
        <p className='p-0 m-0'>+{income}$</p>
      </div>

      <div className='bg-dark expense'>
        <h4 className='p-0 m-0'>EXPENSE</h4>
        <p className='p-0 m-0'>{expense}$</p>
      </div>

    </div>

  )
}
