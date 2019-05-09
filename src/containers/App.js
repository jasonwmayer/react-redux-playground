import React, {Component} from 'react';
import './App.css';
import DNDwrapper from './DNDwrapper';
import {DragDropContext} from 'react-beautiful-dnd'

class App  extends  Component {
//   onBeforeDragStart = (event) =>{
//     console.log('before', event)
// }    

state = {
  numItems:[1,2,3,4,5,6,7,8,9],
  numItems2: [10,11,12,13,14,15,16,17,18,19]
}

onDragStart = (event) =>{
    console.log('drag start', event)
}

onDragUpdate  = (event) =>{
    console.log('Drag Update', event)
}
onDragEnd = (event)=>{
  //this is where you handle your logic to reorder and place objects in their appropriate groups

  if(event.destination){
    const endContainer = event.destination !== undefined ? event.destination.droppableId : null
    const startingContainer = event.source.droppableId
    const elementId = parseInt(event.draggableId.split("-")[1])
    if(endContainer && !this.state[endContainer].includes(elementId)){
      this.setState({
        [startingContainer]: [...this.state[startingContainer]].filter( num => num !== elementId ),
        [endContainer]: [...this.state[endContainer], elementId]
      })
    }

  }

}
  render(){
    return (<div className="App">
      <header className="App-header">
       <div>App mounts</div>
       <DragDropContext 
                    // onBeforeDragStart={this.onBeforeDragStart}
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}
                    >
       <DNDwrapper numItems={this.state.numItems} numItems2={this.state.numItems2}/>
       </DragDropContext>
      </header>
    </div>
    )

  }
   
}

export default App;


// Synchronous reordering
// Because this library does not control your state, it is up to you to synchronously reorder your lists based on the result: DropResult.

// Here is what you need to do
// if the destination is null: all done!
// if source.droppableId equals destination.droppableId you need to remove the item from your list and insert it at the correct position.
// if source.droppableId does not equal destination.droppableId, then you need to remove the <Draggable /> from the source.droppableId list and add it into the correct position of the destination.droppableId list.
// Persisting a reorder
// If you need to persist a reorder to a remote data store - update the list synchronously on the client (such as through this.setState()) and fire off a request in the background to persist the change. If the remote save fails it is up to you how to communicate that to the user and update, or not update, the list.