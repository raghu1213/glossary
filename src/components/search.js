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
        this.onSearchSelected = this.onSearchSelected.bind(this);
    }

    onTextChange(event, data) {
        let searchQuery = data.searchQuery;
        searchGlossary(searchQuery).then(result => {
            this.setState({
                options: result
            });
            this.props.OnSearchTextChanged();
        });
    }

    onSearchSelected(event, data) {
        this.props.OnSearchSelectionChanged(data.options[0]);
    }

    render() {
        return (
            <div>
                <Dropdown search selection options={this.state.options}
                    style={{ width: "100%" }}
                    placeholder="Enter Search Text  "
                    onSearchChange={this.onTextChange}
                    onChange={this.onSearchSelected}
                />
            </div>
        )


    }
}


