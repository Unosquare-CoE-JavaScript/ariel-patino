
import { useState } from 'react';
import './App.css';

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [ disabled, setdisabled ] = useState(false);
  const  newButtonColor = buttonColor === 'MediumVioletRed'? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div>
      { console.log(replaceCamelCaseWithSpaces('MediumVioletBlue')) }
      <button 
        style={{backgroundColor: disabled? 'gray': buttonColor, color:'white'}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setdisabled(e.target.checked)} />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>  
  );
}

export default App;
