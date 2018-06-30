import React, { Component } from 'react';
import {Grid,TextArea,Button} from 'semantic-ui-react'

class Add extends React.Component{
render(){
    return  (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <TextArea placeholder="Title" style={{width:"100%"}}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <TextArea placeholder="Description here" rows={5} autoHeight style={{width:"100%"}}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={13}>
                    </Grid.Column>
                    <Grid.Column width={3}>
                     <Button primary>Add</Button>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
            )
        }
}

export default Add;

