import React, { Component } from 'react';
import './App.css';
import List from './List'
import STORE from './store'

class App extends Component {
  state = {
    store: STORE
  }

  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {}
  //   }
  // }

  render() {

    const { sections } = this.state

    console.log('This is State:', this.state)
    return (
      <main className="App" >
        <header className="App=header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {sections.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => sections.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
