import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Button } from 'semantic-ui-react'
import Add from './components/add.js';
import Details from './components/details';
import addToGlossary from './actions/add';
import PageHeader from './components/pageHeader'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchSelectionChanged: false,
      text: "",
      value: "",
      showAdd: false
    }
    this.onSearchSelectionChanged = this.onSearchSelectionChanged.bind(this);
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
    this.onAddValueToStore = this.onAddValueToStore.bind(this);
  }

  onSearchSelectionChanged(data) {
    this.setState({
      isSearchSelectionChanged: true,
      text: data.text,
      value: data.value
    });
  }

  onSearchTextChanged() {
    this.setState({ isSearchSelectionChanged: false });
  }
  onAddValueToStore(text, value) {
    addToGlossary(text, value);
    this.onAdd(false);
  }

  onAdd(show) {
    this.setState({ showAdd: show });
  }

  render() {
    let detail = null;
    const isSearchSelectionChanged = this.state.isSearchSelectionChanged;
    if (isSearchSelectionChanged) {
      detail = <Details text={this.state.text} value={this.state.value} />
    }

    const showAddControl = this.state.showAdd;
    let addControl = null;
    if (showAddControl) {
      addControl = <Add onAddValueToStore={this.onAddValueToStore} />
    }

    return (
      <div className="App">
        <PageHeader />
        <Grid>
          <Grid.Row style={{ margin: "2rem" }}>
            <Grid.Column width={2} />
            <Grid.Column width={10}>
              <Search onSearchSelectionChanged={this.onSearchSelectionChanged} onSearchTextChanged={this.onSearchTextChanged} />
            </Grid.Column>
            <Grid.Column width={1}>
              <Button content="Add" onClick={() => this.onAdd(true)} />
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row style={{ margin: "2rem" }}>
            <Grid.Column width={2} />
            <Grid.Column width={10}>
              {detail}
              {addControl}
            </Grid.Column>
            <Grid.Column width={1}>
             
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
       
      </div>
    );
  }
}

export default App;
