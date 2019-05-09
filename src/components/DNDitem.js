import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const style = {
    borderStyle: `solid`, 
    borderWidth: `2px`,
    borderColor: `blue`,
    margin: `4px`
}


//<Draggable /> components can be dragged around and dropped onto <Droppable />s. A <Draggable /> must always be contained within a <Droppable />. It is possible to reorder a <Draggable /> within its home <Droppable /> or move to another <Droppable />. It is possible because a <Droppable /> is free to control what it allows to be dropped on it.

//Every <Draggable /> has a drag handle. A drag handle is the element that the user interacts with in order to drag a <Draggable />. A drag handle can be the <Draggable /> element itself, or a child of the <Draggable />. Note that by default a drag handle cannot be an interactive element, since event handlers are blocked on nested interactive elements. Proper semantics for accessibility are added to the drag handle element. If you wish to use an interactive element, disableInteractiveElementBlocking must be set.


// import type { Node } from 'react';

// type Props = {|
//   // required
//   draggableId: DraggableId,
//   index: number,
//   children: (DraggableProvided, DraggableStateSnapshot) => Node,
//   // optional
//   isDragDisabled: ?boolean,
//   disableInteractiveElementBlocking: ?boolean,
//   shouldRespectForcePress: ?boolean,
// |};
const DNDitem = ({number}) =>{
    return(
        <div style={style}>
            <Draggable draggableId={`draggable-${number}`} index={0}>
                {(provided, snapshot)=>(

                    <div 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                        DNDitem {`${number}`}
                        
                        </div>
                )}


            </Draggable>
        
        
        
        </div>
        
    )
}

export default DNDitem