import React from 'react'
import Button from './Button'

function ControlPad({commands,setCommands,currentFace, move, left }) {

    const handleMove = (currentFace) => {
        move(currentFace)
        // console.log(currentFace)
    }

    const handleLeft = (currentFace) => {
        left(currentFace)
    }

    const handleReset = () => {
        setCommands([])
    }
    return (
        <div>
            <Button name='MOVE' handleClick={handleMove} currentFace={currentFace} />
            <Button name='LEFT' handleClick={handleLeft} currentFace={currentFace}/>
            {/* <Button name='RIGHT' handleClick={handleClick} />  */}
            <Button name='RESET' handleClick={handleReset} /> 
        </div>
    )
}

export default ControlPad
