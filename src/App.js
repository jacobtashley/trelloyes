import React from 'react';
import './App.css';
import List from './List'

function App(props) {
  console.log(props);

  return (
    <main className="App">
      <header className="App=header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List 
          header={props.header}
          cards={props.allCards}
        />
      </div>
    </main>
  );
}

export default App;
