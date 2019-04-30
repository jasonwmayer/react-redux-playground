import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'

const MultiSearchDropdown = (props) => (
  <Dropdown
    placeholder='Some placeholder text'
    fluid
    multiple
    search
    selection
    options={props.options}
  />
)

const mapSTP = (state)=>{
   return{
    options: state.options,
    selectedValues: state.selectedValues
   } 
}

export default connect(mapSTP)(MultiSearchDropdown)