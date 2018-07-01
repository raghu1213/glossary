import React from 'react'
import { Item } from 'semantic-ui-react'
import Delete from './delete'

const Details = ({ title, description, remove }) => {
    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header as='a'>{title}</Item.Header>
                </Item.Content>
            </Item>

            <Item>
                <Item.Content>
                    <Item.Meta>{description}</Item.Meta>
                </Item.Content>
            </Item>
            <Delete remove={remove} />
        </Item.Group>
        
    );
}

export default Details