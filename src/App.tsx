import React from 'react';

import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  
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
