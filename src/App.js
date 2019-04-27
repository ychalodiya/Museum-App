import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import DisplayArea from './components/DisplayArea';

import AppBar from '@material-ui/core/AppBar';

// Our app should have state for the current search term and results, so it can pass these things to the display area

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentSearch: '',
      art: []
    }
  }

  updateCurrentSearch = (currentSearch) => {
    this.setState({
      currentSearch
    });
  }

  updateArt = (art) => {
    this.setState({
      art
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">

          <Header />
        </AppBar>
        <main>
          <AppBar position="sticky" color="default">

            <SearchForm 
            updateArt={this.updateArt} 
            updateCurrentSearch={this.updateCurrentSearch}
            />
          </AppBar>
          
                <DisplayArea 
                art={this.state.art} 
                currentSearch={this.state.currentSearch}
                />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
