import React from 'react'
import {  Button } from 'semantic-ui-react'

const Delete = ({ remove}) => {
    return (
        <div>
            <Button onClick={()=>remove()}>Delete</Button>
        </div>
    );
}

export default Delete