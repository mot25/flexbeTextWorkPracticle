import React, { createContext, useReducer } from 'react'

export const Context = createContext()

export const ContextWrapper = ({ children }) => {

    let init = {
        arrPhotos: [],
        counter: 0
    }

    const Reducer = (state, action) => {
        switch (action.type) {
            case "SET_PHOTOS":
                return { ...state, arrPhotos: [ ...state.arrPhotos, ...action.item ]}
            case "SET_COUNTER":
                return { ...state, counter: action.num }

            default:
                return state;
        }
    }


    const [value, dispatch] = useReducer(Reducer, init)

    value.setarrPhotos = (item) => {
        console.log('item', item)

        dispatch({ type: 'SET_PHOTOS', item })
    }
    value.setCounter = (num) => {
        console.log('num', num)
        
        dispatch({ type: 'SET_COUNTER', num })
    }


    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}