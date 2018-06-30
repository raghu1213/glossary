import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search.js'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Button, Popup } from 'semantic-ui-react'
import Add from './components/add.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Grid.Row style={{ margin: "2rem" }}>
            <Grid.Column width={15}>
              <Search />
            </Grid.Column>
            <Grid.Column width={1}>
              <Popup trigger={<Button icon='add' />} flowing hoverable>
                <Add />
              </Popup>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    );
  }
}

export default App;
