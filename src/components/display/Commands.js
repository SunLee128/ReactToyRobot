import React from 'react'

import Command from './Command'

function Commands({state, }) {

    return (
        <div>
            <div>
                
                {/* {state.map((c) => 
                    <Command 
                        command={c.command} 
                        id={c.id} 
                        x={c.x}
                        y={c.y}
                        face={c.face}
                    />
                )} */}
                {state.command}
                {state.x},
                {state.y},
                {state.face},
                {state.history}
            </div>
        </div>
    )
}

export default Commands
