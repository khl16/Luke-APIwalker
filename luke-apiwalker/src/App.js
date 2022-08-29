import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Details from './components/Details';

function App() {

  const [element, setElement] = useState({});

  return (
    <div className="App">
      <SearchBar setElement={setElement}/>
      <Details element={element}/>
    </div>
  );
}

export default App;