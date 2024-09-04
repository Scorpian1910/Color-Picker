import React from 'react';

function RandomColorButton({ setSelectedColor }) {
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setSelectedColor(randomColor);
  };

  return (
    <button onClick={generateRandomColor} style={{ padding: '10px', marginTop: '20px' }}>
      Generate Random Color
    </button>
  );
}

export default RandomColorButton;
