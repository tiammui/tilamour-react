import React, { useState } from 'react';

function FilterSlab() {
  return (
    <div id="filters">
      <ul>
        <li className="active">
          <button>Computer Science</button>
          <div className="cancel">x</div>
        </li>
        <li>
          <button>Business Admin.</button>
          <div className="cancel">x</div>
        </li>
        <li>
          <button>Computer Engr.</button>
          <div className="cancel">x</div>
        </li>
        <li>
          <button>Business Admin.</button>
          <div className="cancel">x</div>
        </li>
        <li>
          <button>Computer Engr.</button>
          <div className="cancel">x</div>
        </li>
      </ul>
    </div>
  );
}

export default FilterSlab;
