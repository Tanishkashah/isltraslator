import React from 'react';
import Header from './components/Header'; // Import the Header component
import './App.css'; // Ensure your styles are imported
import Homepage from './components/Homepage.jsx';

function App() {
  return (
    <div className="App">
      <Header /> {/* Use the Header component */}
      <Homepage /> {/* Use the Homepage component */}
    </div>
  );
}

export default App;