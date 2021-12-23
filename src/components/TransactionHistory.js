import React from 'react'
import { useGlobalContext } from '../context'

export const TransactionHistory = () => {

    const { transactions, removeTransaction } = useGlobalContext()



    return (
        <div className="transaction_history">
            <h2>Transaction History</h2>
            <hr />

            {transactions.length > 0 ?
                transactions.map(item => {
                    const { id, description, amount } = item
                    return <div key={id} className={`money ${amount > 0 ? 'plus' : 'minus'}`}>
                            <p className='close_transaction_history'
                                onClick={() => removeTransaction(id)}
                            >X</p>
                            <p className='desc'>{description}</p>
                            <p>{amount}$</p>
                        </div>
                })
                :
                <p style={{ fontSize: 10, display: 'flex', justifyContent: 'center', color: 'red' }}>NO TRANSACTION</p>
            }
        </div>
    )
}
