import React from 'react';
import ColorPicker from './colorpicker'; 
import './App.css'; 

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange' , 'purple', 'cyan'];
  return (
    <div className="App">
      <ColorPicker colors={colors} /> {/* Pass the colors prop */}
    </div>
  );
};
export default App;
