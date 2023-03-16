import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
            <input type="file" name="myImage" accept=".png" />
            <input type="text" name="name" />
            <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
