import React, {Component} from 'react'
import DNDitem from '../components/DNDitem';
import { Droppable } from 'react-beautiful-dnd'

// import type { Node } from 'react';

// type Props = {|
//   // required
//   droppableId: DroppableId,
//   // optional
//   type?: TypeId,
//   isDropDisabled?: boolean,
//   isCombineEnabled?: boolean,
//   direction?: Direction,
//   ignoreContainerClipping?: boolean,
//   children: (Provided, StateSnapshot) => Node,
// |};



class DNDwrapper extends Component {
   

    render(){

       
        return(
            <div>

            {/* Types have to match in order for an item to be dragable into another item */}
            <Droppable droppableId="numItems" type="PERSON">
            {(provided, snapshot) =>(
            <div style={{
                borderStyle: `solid`, 
                borderWidth: `4px`,
                borderColor: `green`,
                backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' 
    
            }} ref={provided.innerRef} {...provided.droppableProps}>
                <h2>DNDwrapper</h2>
                    
                {provided.placeholder}
                {this.props.numItems.map( (item)=> <DNDitem key={`draggable-${item}`} number={item}/>)}
            </div>

            )}
            </Droppable>
            <Droppable droppableId="numItems2" type="PERSON">
            {(provided, snapshot) =>(
            <div style={{
                borderStyle: `solid`, 
                borderWidth: `4px`,
                borderColor: `red`,
                backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' 
    
            }} ref={provided.innerRef} {...provided.droppableProps}>
                <h2>DNDwrapper</h2>
                    
                {provided.placeholder}
                {this.props.numItems2.map( (item,index)=> <DNDitem key={`draggable-${item}`} number={item}/>)}
            </div>

            )}
            </Droppable>

            </div>
        )
    }
}

export default DNDwrapper