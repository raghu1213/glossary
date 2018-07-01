import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Button } from 'semantic-ui-react'
import Add from './components/add.js';
import Details from './components/details';
import addToGlossary from './actions/add';
import deleteFromGlossary from './actions/delete';
import PageHeader from './components/pageHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchSelectionChanged: false,
      title: "",
      description: "",
      message: "",
      showAdd: false
    }
    this.onSearchSelectionChanged = this.onSearchSelectionChanged.bind(this);
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
    this.onAddValueToStore = this.onAddValueToStore.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onSearchSelectionChanged(title, description) {
    console.log(title + "--" + description)
    this.setState({
      isSearchSelectionChanged: true,
      title: title,
      description: description
    });
  }

  onSearchTextChanged() {
    this.setState({ isSearchSelectionChanged: false });
    this.setState({ message: "" })
  }
  async onAddValueToStore(title, description) {
    let msg = await addToGlossary(title, description);
    this.onAdd(false);
    this.onSearchTextChanged();
    this.setState({ message: msg.message })
  }

  onAdd(show) {
    this.setState({ showAdd: show });
  }

  async onDelete() {
    let msg = await deleteFromGlossary(this.state.title);
    this.onSearchTextChanged();
    this.setState({ message: msg.message })
  }

  render() {
    let detail = null;
    const isSearchSelectionChanged = this.state.isSearchSelectionChanged;
    if (isSearchSelectionChanged) {
      detail = <Details title={this.state.title} description={this.state.description} remove={this.onDelete} />
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
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={10}>
              {detail}
              {addControl}
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={10}>
              <div>{this.state.message}</div>
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={2} />
          </Grid.Row>

        </Grid>

      </div>
    );
  }
}

export default App;
