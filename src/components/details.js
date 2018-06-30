import React from 'react'
import { Item } from 'semantic-ui-react'

const Details = (props) => {
    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header as='a'>{props.text}</Item.Header>
                </Item.Content>
            </Item>

            <Item>
                <Item.Content>
                    <Item.Meta>{props.value}</Item.Meta>
                </Item.Content>
            </Item>
        </Item.Group>
    );
}

export default Details