import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import searchGlossary from '../actions/search'

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
            this.props.onSearchTextChanged();
        });
    }

    onSearchSelected(event, data) {
        let details = data.options.filter(o => o.text === event.target.textContent)[0]
        if (details !== undefined) {
            this.props.onSearchSelectionChanged(details.text, details.value);
        }
    }

    render() {
        return (
            <div>
                <Dropdown fluid search selection options={this.state.options}
                    style={{ width: "100%" }}
                    placeholder="Enter Search Text  "
                    onSearchChange={this.onTextChange}
                    onChange={this.onSearchSelected}

                />
            </div>
        )


    }
}


