import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Button, Popup } from 'semantic-ui-react'
import Add from './components/add.js';
import Details from './components/details'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchSelectionChanged: false,
      text: "",
      value: ""
    }
    this.OnSearchSelectionChanged = this.OnSearchSelectionChanged.bind(this);
    this.OnSearchTextChanged = this.OnSearchTextChanged.bind(this);
  }

  OnSearchSelectionChanged(data) {
    this.setState({
      isSearchSelectionChanged: true,
      text: data.text,
      value: data.value
    });
  }

  OnSearchTextChanged() {
    this.setState({ isSearchSelectionChanged: false });
  }

  render() {
    let detail = null;
    const isSearchSelectionChanged = this.state.isSearchSelectionChanged;
    if (isSearchSelectionChanged) {
      detail = <Details text={this.state.text} value={this.state.value} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Glossary of Jargons</h1>
        </header>
        <Grid>
          <Grid.Row style={{ margin: "2rem" }}>
            <Grid.Column width={15}>
              <Search OnSearchSelectionChanged={this.OnSearchSelectionChanged} OnSearchTextChanged={this.OnSearchTextChanged} />
            </Grid.Column>
            <Grid.Column width={1}>
              <Popup trigger={<Button icon='add' />} flowing hoverable>
                <Add />
              </Popup>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {detail}
      </div>
    );
  }
}

export default App;
