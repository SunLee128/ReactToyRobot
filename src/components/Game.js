import React, {useState} from 'react'
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
*/

function Game() {
    const faces = ["NORTH", "EAST", "SOUTH", "WEST"]
    const initialCommands= [
        {command: 'MOVE', x: 0, y: 1, face: "NORTH",id: uuid()},
        {command: 'LEFT', x: 1, y: 0, face: "NORTH",id: uuid()},
        {command: 'RIGHT',x: 2, y: 4, face: "SOUTH", id: uuid()},
    ]

    const [commands, setCommands] = useState(initialCommands)
    let currentX = commands[commands.length-1].x 
    let currentY = commands[commands.length-1].y 
    let currentFace = commands[commands.length-1].face 

    const move = (face) => {
        switch(face){
            case "NORTH": _moveNorth(currentY); break;
            case "SOUTH": _moveSouth(currentY); break;
            case "EAST": _moveEast(currentX); break;
            case "WEST": _moveWest(currentX); break;
            default: return
        }
    }

    const left = (currentFace) => {
      let leftTurnedFaces = [faces[3], faces[0], faces[1], faces[2]]
      let currentFaceIndex = faces.indexOf(currentFace)
      let leftTurned = leftTurnedFaces[currentFaceIndex]
      setCommands(prevState => 
        [...prevState, {command: "LEFT", x: currentX, y: currentY+1, face: leftTurned, id: uuid()}])
    }

    console.log(left(currentFace))
    
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
