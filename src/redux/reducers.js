import { combineReducers } from 'redux';
import {
    SET_DROPDOWN_VALUES,
    ADD_DROPDOWN_VALUE
                        } from './actions/types'

let options= [
    {key: 1, 
     text: "this is what's displayed", 
     value: "this is the event value"},

     {key: 2,
     text: "option2",
     value: "value of option 2"}
]

const connectReducer = (state= "connected", action) =>{
    switch(action.type){
        default:
        return state
    }
}

//manages the options array
const optionsReducer = (state= options, action)=>{
    switch(action.type){
        case ADD_DROPDOWN_VALUE:
            return [...state, action.payload]
        default:
        return state
    } 
}


//manages the selected values array
const selectedValuesReducer = (state=[], action)=>{
    switch(action.type){
        case SET_DROPDOWN_VALUES:
            return action.payload 
        default:
            return state
    } 
}

const reducers ={
 connected: connectReducer,
 options: optionsReducer,
 selectedValues: selectedValuesReducer
}

export default combineReducers(reducers)

