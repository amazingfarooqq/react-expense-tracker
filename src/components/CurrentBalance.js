import React from 'react'
import { useGlobalContext } from '../context'

export const CurrentBalance = () => {

  const { transactions } = useGlobalContext()

  const balance = transactions.reduce((acc, item) => {
    return acc += +item.amount
  }, 0).toFixed(2)

  return (
    <div className="current_balance">
      <h2>CURRENT BALANCE</h2>
      <h1>${balance}</h1>
    </div>
  )
}