import React, { useState } from 'react';

function But() {
  var colors = ['red', 'yellow', 'green'];
  var [butColor, setButColor] = useState('red');

  function changeColor() {
    var newColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(newColor);
    setButColor(newColor);
  }

  return (
    <button style={{color:butColor||"red"}} onClick={changeColor} > Click jo</button>
  );
}

export default But;