import React from 'react'

import Command from './Command'

function Commands({commands}) {

    return (
        <div>
            <div>
                
                {commands.map((c) => 
                    <Command 
                        command={c.command} 
                        id={c.id} 
                        x={c.x}
                        y={c.y}
                        face={c.face}
                    />
                )}
            </div>
        </div>
    )
}

export default Commands
