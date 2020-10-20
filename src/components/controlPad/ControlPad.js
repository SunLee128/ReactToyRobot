import React from 'react'
import Button from './Button'

function ControlPad({move, left, right }) {

    const handleMove = () => {
        move()
        // console.log(currentFace)
    }

    const handleLeft = () => {
        left()
    }

    const handleRight = () => {
        right()
    }

    // const handleReset = () => {
    //     setCommands([])
    // }
    return (
        <div>
            <Button name='MOVE' handleClick={handleMove} />
            {/* <Button name='MOVE BACK' handleClick={handleRight} />  */}
            <Button name='LEFT' handleClick={handleLeft} />
            <Button name='RIGHT' handleClick={handleRight} /> 
            {/* <Button name='RESET' handleClick={handleReset} />  */}
        </div>
    )
}

export default ControlPad
