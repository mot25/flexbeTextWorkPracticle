import React, { createContext, useReducer } from 'react'
import { Reducer } from './Reducer'

export const Context = createContext()

export const ContextWrapper = ({ children }) => {

    let init = {
        arrPhotos: [],
        counter: 0
    }

    const [value, dispatch] = useReducer(Reducer, init)

    value.setarrPhotos = (item) => dispatch({ type: 'SET_PHOTOS', item })

    value.setCounter = (num) => dispatch({ type: 'SET_COUNTER', num })


    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}