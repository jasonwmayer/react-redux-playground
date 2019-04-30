import { combineReducers } from 'redux';
import {SET_DROPDOWN_VALUE} from './actions/types'

const options= [
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


const optionsReducer = (state=options, action)=>{
    switch(action.type){
        default:
        return state
    } 
}

const selectedValuesReducer = (state=[], action)=>{
    switch(action.type){
        case SET_DROPDOWN_VALUE:
        return action.type
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

