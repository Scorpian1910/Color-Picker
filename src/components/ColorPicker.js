import React from 'react';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5'];

function ColorPicker({ setSelectedColor }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', margin: '20px 0' }}>
      {colors.map(color => (
        <div
          key={color}
          onClick={() => setSelectedColor(color)}
          style={{ backgroundColor: color, height: '50px', cursor: 'pointer' }}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
