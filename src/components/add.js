import React, { Component } from 'react';
import { Grid, TextArea, Button } from 'semantic-ui-react'
class Add extends Component {

    onButtonClick(event, data) {

        this.props.onAddValueToStore(this.title.value, this.desc.value);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <TextArea ref="title" placeholder="Jargon/Abbreviation/Anything" style={{ width: "100%" }} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <TextArea ref="desc" placeholder="Description here" rows={5} autoHeight style={{ width: "100%" }} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={13}>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button primary onClick={this.onButtonClick}>Add</Button>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Add;

