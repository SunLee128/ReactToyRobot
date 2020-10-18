import React from 'react'
import Button from './Button'

function ControlPad({commands, setCommands, currentLocation,setLocations,move }) {

    const handleClick = (type, currentLocation) => {
        setCommands([...commands, {command: type} ])
        move(currentLocation)
        console.log(currentLocation)
    }

    const handleReset = () => {
        setCommands([])
        setLocations([])
    }
    return (
        <div>
            <Button type='MOVE' handleClick={handleClick} currentLocation={currentLocation} />
            <Button type='LEFT' handleClick={handleClick} currentLocation={currentLocation}/>
            <Button type='RIGHT' handleClick={handleClick} currentLocation={currentLocation}/>
            <Button type='RESET' handleClick={handleReset} currentLocation={currentLocation}/>
        </div>
    )
}

export default ControlPad
