document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputValue = document.getElementById('outputValue');
    const outputUnit = document.getElementById('outputUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    // Function to perform conversion based on units
    const convertTemperature = () => {
      const value = parseFloat(inputValue.value);
      if (isNaN(value)) return; // If input is not a valid number, do nothing
  
      let result = 0;
  
      if (inputUnit.value === 'C') {
        if (outputUnit.value === 'F') {
          result = (value * 9/5) + 32; // Celsius to Fahrenheit
        } else if (outputUnit.value === 'K') {
          result = value + 273.15; // Celsius to Kelvin
        } else {
          result = value; // Celsius to Celsius
        }
      } else if (inputUnit.value === 'F') {
        if (outputUnit.value === 'C') {
          result = (value - 32) * 5/9; // Fahrenheit to Celsius
        } else if (outputUnit.value === 'K') {
          result = (value - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        } else {
          result = value; // Fahrenheit to Fahrenheit
        }
      } else if (inputUnit.value === 'K') {
        if (outputUnit.value === 'C') {
          result = value - 273.15; // Kelvin to Celsius
        } else if (outputUnit.value === 'F') {
          result = (value - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        } else {
          result = value; // Kelvin to Kelvin
        }
      }
  
      outputValue.value = result.toFixed(2); // Display result with 2 decimal places
    };
  
    // Event listener for the Convert button
    convertBtn.addEventListener('click', convertTemperature);
  
    // Reset function to clear input fields
    resetBtn.addEventListener('click', () => {
      inputValue.value = '';
      outputValue.value = '';
      inputUnit.value = 'C';
      outputUnit.value = 'C';
      convertBtn.disabled = true; // Disable the convert button after reset
    });
  
    // Enable or disable convert button based on input value
    inputValue.addEventListener('input', () => {
      const value = inputValue.value;
      convertBtn.disabled = !value || isNaN(value) || value === ''; // Disable if empty or invalid
    });
  
    // Initial state of the button
    convertBtn.disabled = !inputValue.value || isNaN(inputValue.value) || inputValue.value === '';
  });
  