import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react'
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    onButtonClick(event, data) {
        this.props.onAddValueToStore(this.state.title, this.state.description);
    }

    onTitleChange(event, data) {
        this.setState({ title: data.value });
    }

    onDescriptionChange(event, data) {
        this.setState({ description: data.value });
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "left", fontWeight: "Bold" }}>
                    Title
                </div>
                <div style={{ textAlign: "left" }}>
                    <TextArea style={{ width: "100%" }} rows={1} onChange={this.onTitleChange} />
                </div>
                <div style={{ textAlign: "left", fontWeight: "Bold" }}>
                    Description
                </div>
                <div>
                    <TextArea rows={5} autoHeight style={{ width: "100%" }} onChange={this.onDescriptionChange} />
                </div>
                <div style={{ textAlign: "right" }} >
                    <Button primary onClick={this.onButtonClick}>Add</Button>
                </div>
            </div>
        )
    }
}

export default Add;

