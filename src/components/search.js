import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import searchGlossary from '../actions/actions'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(event, data) {
        let searchQuery = data.searchQuery;
        searchGlossary(searchQuery).then(result => {
            console.log(result);
            this.setState({
                options: result
            });
        });
    }

    render() {
        return (
            <div>
                <Dropdown search selection options={this.state.options} style={{ width: "100%" }}
                    placeholder="type in your search string" onSearchChange={this.onTextChange}
                />
            </div>
        )


    }
}


