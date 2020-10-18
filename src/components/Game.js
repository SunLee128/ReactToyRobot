import React, {useState} from 'react'
import uuid from 'react-uuid'
import Commands  from './display/Commands'
import ControlPad from './controlPad/ControlPad'
import Table from './table/Table'


function Game() {
    const initialValue= [
        {command: 'MOVE'},
        {command: 'LEFT'},
        {command: 'RIGHT'},
    ]
    const [locations, setLocations] = useState([{x: 0, y: 0, face: "NORTH"}])
    const [commands, setCommands] = useState(initialValue)
    let currentLocation = locations.pop()

    const move = (currentLocation) => {
        switch(currentLocation){
            case "NORTH": _moveNorth(currentLocation); break;
            case "SOUTH": _moveSouth(currentLocation); break;
            case "EAST": _moveEast(currentLocation); break;
            case "WEST": _moveWest(currentLocation); break;
            default: return
        }
    }

    const _moveNorth = (currentLocation) => {
        console.log('moveNorth',locations.x, locations.y, locations.face)
    }

    const _moveSouth = (currentLocation) => {
        console.log('moveSouth',locations.x, locations.y, locations.face)
    }

    const _moveEast = (currentLocation) => {
        console.log('moveEast',locations.x, locations.y, locations.face)
    }

    const _moveWest = (currentLocation) => {
        console.log('moveWEst', locations.x, locations.y, locations.face)
    }


    return (
        <div>
            <ControlPad 
              commands={commands} 
              setCommands={setCommands} 
              currentLocation={currentLocation}
              setLocation={setLocations}
              move={move}
            />
            <Commands 
              locations={locations} 
              commands={commands} 
              setCommands={setCommands}
            />
            <Table />
        </div>
    )
}

export default Game
