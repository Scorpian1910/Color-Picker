import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import RandomColorButton from './components/RandomColorButton';
import './App.css';


function App() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: selectedColor, height: '100px', width: '100px', margin: 'auto' }} />
      <ColorPicker setSelectedColor={setSelectedColor} />
      <RandomColorButton setSelectedColor={setSelectedColor} />
    </div>
  );
}

export default App;
