import React, { Component } from 'react'
import { List } from 'semantic-ui-react'


export default class AlphabeticalDisplay extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            alphaResults: this.props.allResults
        }

    }
    getResults() {
        var results = this.props.allResults.map(result => {
            return <List.Item>{result.key}</List.Item>
        })
        return results;
    }
    onListClick(event) {
        console.log(event)
    }
    render() {
        return (
            <div>
                <div>
                    <List as="ol" >
                        {this.getResults()}
                    </List>
                </div>


            </div>
        )
    }
}

