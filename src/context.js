import React, { useContext, useReducer, useEffect, useState } from "react";
import { reducer } from "./reducer";


const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    
    const [transactions, setTransactions] = useState([])

    const addNewTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])
    }

    const removeTransaction = (id) => {
        setTransactions(transactions.filter(item => item.id !== id))
    }

    return <AppContext.Provider value={
        {
            transactions,
            addNewTransaction,
            removeTransaction        
        }
    }>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}