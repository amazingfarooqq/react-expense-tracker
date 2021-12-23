import React, { useState } from 'react'
import { useGlobalContext } from '../context'

export const AddNewTransaction = () => {

    const { addNewTransaction } = useGlobalContext()

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')

    const [errorDescription, setErrorDescription] = useState(false)
    const [errorAmount, setErrorAmount] = useState(false)




    const handleSubmit = (e) => {
        e.preventDefault()

        if (description == '') {
            setErrorDescription(true)
        }
        else if (amount == '') {
            setErrorDescription(false)
            setErrorAmount(true)
        }
        else if (description !== '' && amount !== '') {
            setErrorDescription(false)
            setErrorAmount(false)
            const newTransaction = {
                id: new Date().getTime().toString(),
                description: description,
                amount: amount
            }
            addNewTransaction(newTransaction)
            setDescription('')
            setAmount('')
        }

    }

    return (
        <div className="add_new_transaction">
            <h2>Add New Transaction</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label htmlFor="description">Description</label>
                    <br />
                    <input className={errorDescription && 'border-red'} type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onClick={() => setErrorDescription(false)}
                    />
                </div>
                <div className="form_control" >
                    <label htmlFor="tran_amount">Transaction Amount</label>
                    <br />
                    <input className={errorAmount && 'border-red'} type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        onClick={() => setErrorAmount(false)}
                    />
                </div>
                <button>Add Transaction</button>
            </form>

        </div>
    )
}
