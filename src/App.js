import React from 'react';
import './App.css';
// import Quality from './component/Quality';
import Sidebar from './component/Sidebar';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
          <Sidebar/>
        <Content/>
      </div>
  );
}

export default App;

