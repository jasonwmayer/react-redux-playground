import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'

const MultiSearchDropdown = (props) => (
  <Dropdown
    placeholder='Some placeholder text'
    fluid
    multiple
    search
    selection


    options={props.options}  // <--- this is the connected options ARRAY this
                            //       needs the structure of: 
                            //      [
                            //         {key: 1, 
                            //         text: "this is what's displayed", 
                            //         value: "this is the Semantic UI Event value"}
                            //      ]

    value={props.selectedValues} //<---- this an array of the values from the option object
                                // A note here: if you allow a user to `add` items, then 
                                // those items will appear as strings in this values array

    allowAdditions // <--- this allows user to add items and triggers 
                         //the onAddItem function on click of 'enter'

   // onAddItem={(e, data)=>{console.log(e, data)}} //<-- use the console.log here 
                                                 //  if you want to check it out
    // `e` here is React's synthetic event 
    // `data` is the event created by the Semantic UI component
    // Data is the one you want. The data.value will be the text a user 
    // inputs for the user added item.
    onAddItem={(e,data)=>{props.addUserDropdownOption(e,data)}} //<-- you want to use this to create 
                                                                //    a new option object and add it 
                                                                //    to the options array

    onChange={(e, data) =>{props.setCurrentSelectedValues(e, data)}} //<-- for mulitSelect this returns an array of 
                                                      //    the values currently in the selection bar

  />
)

const mapSTP = (state)=>{
   return{
    options: state.options,
    selectedValues: state.selectedValues
   } 
}

export default connect(mapSTP, actions)(MultiSearchDropdown)