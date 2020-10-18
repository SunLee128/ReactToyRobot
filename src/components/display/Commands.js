import React from 'react'

import Command from './Command'

function Commands({commands, setCommands}) {
    const handleClick = (type) => {
        setCommands([...commands, {command: type} ])
    }

    const handleReset = () => {
        setCommands([])
    }

    return (
        <div>
            <div>
                
            </div>
            
            <div>
                {commands.map(c => <Command type={c.command}/>)}
            </div>
        </div>
    )
}

export default Commands
