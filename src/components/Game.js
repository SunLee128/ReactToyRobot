import React, {useState, useReducer} from 'react'
import uuid from 'react-uuid'
import Commands  from './display/Commands'
import ControlPad from './controlPad/ControlPad'
import Table from './table/Table'

/*
Todos
- Place button
- Back button
- Robot
- Highlight the current cell
- Does a cell need state? true/false
*/

const ACTIONS = {
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  PLACE: 'PLACE',
  BACK: 'BACK'
}

const LEFTFACES = {
  NORTH : "WEST",
  WEST : "SOUTH",
  SOUTH: "EAST",
  EAST: "NORTH"
}

const RIGHTFACES = {
  NORTH : "EAST",
  EAST: "SOUTH",
  SOUTH: "WEST",
  WEST : "NORTH",
}

function reducer(state, action) {
  switch(action.type){
    case ACTIONS.LEFT:
      return [...state, {command: "LEFT", x: state[state.lenth-1].x, y: state.y, face: state.face, id: uuid()}]
    default:
      return state
  }
}


function Game() {

  const faces = ["NORTH", "EAST", "SOUTH", "WEST"]
  const initialValue= {
    command: 'MOVE', 
    x: 0, 
    y: 1, 
    face: "NORTH",
    history: []
  }
  
  const [state, dispatch] = useReducer(reducer, initialValue)

    // const [state, setCommands] = useState(initialCommands)
    // let currentX = state[state.length-1].x 
    // let currentY = state[state.length-1].y 
    // let currentFace = state[state.length-1].face 

    // const move = (face) => {
    //     switch(face){
    //         case "NORTH": _moveNorth(currentY); break;
    //         case "SOUTH": _moveSouth(currentY); break;
    //         case "EAST": _moveEast(currentX); break;
    //         case "WEST": _moveWest(currentX); break;
    //         default: return
    //     }
    // }

    // const left = (currentFace) => {
    //   let leftTurnedFaces = [faces[3], faces[0], faces[1], faces[2]]
    //   let currentFaceIndex = faces.indexOf(currentFace)
    //   let leftTurned = leftTurnedFaces[currentFaceIndex]
    //   setCommands(prevState => 
    //     [...prevState, {command: "LEFT", x: currentX, y: currentY, face: leftTurned, id: uuid()}])
    // }

    const left = (currentFace) => {
      let leftTurnedFaces = [faces[3], faces[0], faces[1], faces[2]]
      let currentFaceIndex = faces.indexOf(currentFace)
      let leftTurned = leftTurnedFaces[currentFaceIndex]
      dispatch({type: ACTIONS.LEFT})
    }

    const right = (currentFace) => {
      let rightTurnedFaces = [faces[1], faces[2], faces[3], faces[0]]
      let currentFaceIndex = faces.indexOf(currentFace)
      let rightTurned = rightTurnedFaces[currentFaceIndex]
      setCommands(prevState => 
        [...prevState, {command: "RIGHT", x: currentX, y: currentY, face: rightTurned, id: uuid()}])
    }
    
    const _moveNorth = (y) => {
        if (y < 4) {
          setCommands(prevState => 
            [...prevState, {command: "MOVE", x: currentX, y: currentY+1, face: currentFace, id: uuid()}])
        }
        else {
          setCommands(prevState => 
            [...prevState, {command: "Can't move forward", x: currentX, y: currentY, face: currentFace, id: uuid()}])
        } 
    }

    const _moveSouth = (y) => {
      if (y > 0) {
        setCommands(prevState => 
          [...prevState, 
            { command: "MOVE", 
              x: currentX, 
              y: currentY-1, 
              face: currentFace, 
              id: uuid()
            }
          ])
      }
      else {
        setCommands(prevState => 
          [...prevState, 
            { command: "Can't move forward", 
              x: currentX, 
              y: currentY, 
              face: currentFace, 
              id: uuid()
            }
          ])
      } 
    }

    const _moveEast = (x) => {
      if (x < 4) {
        setCommands(prevState => 
          [...prevState, 
            { command: "MOVE", 
              x: currentX+1, 
              y: currentY, 
              face: currentFace, 
              id: uuid()
            }
          ])
      }
      else {
        setCommands(prevState => 
          [...prevState, 
            { command: "Can't move forward", 
              x: currentX, 
              y: currentY, 
              face: currentFace, 
              id: uuid()
            }
          ])
      } 
    }
    
    const _moveWest = (x) => {
      if (x >0) {
        setCommands(prevState => 
          [...prevState, 
            { command: "MOVE", 
              x: currentX-1, 
              y: currentY, 
              face: currentFace, 
              id: uuid()
            }
          ])
      }
      else {
        setCommands(prevState => 
          [...prevState, 
            { command: "Can't move forward", 
              x: currentX, 
              y: currentY, 
              face: currentFace, 
              id: uuid()
            }
          ])
      } 
    }
    
    return (
        <div>
            <ControlPad 
              commands={commands} 
              setCommands={setCommands} 
              currentX={currentX}
              currentY={currentY}
              currentFace={currentFace}
              move={move}
              left={left}
              right={right}
            />
            <Commands 
              commands={commands} 
              setCommands={setCommands} 
              currentX={currentX}
              currentY={currentY}
              currentFace={currentFace}
              move={move}
            />
            <Table />
        </div>
    )
}

export default Game
