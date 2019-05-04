import {
    SET_DROPDOWN_VALUES,
    ADD_DROPDOWN_VALUE
                        } from './types'


// this action creates a new options object 
// and then addes it to the options array
export const addUserDropdownOption = (e, data)=>{
    const userAddedItem = {key: data.value, 
        text: data.value, 
        value: data.value}
 return {type: ADD_DROPDOWN_VALUE, payload: userAddedItem}
}


// this action sets the current selectct values
export const setCurrentSelectedValues = (e, data) =>{
    return{ type: SET_DROPDOWN_VALUES, payload: data.value}
}