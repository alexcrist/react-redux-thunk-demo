import React from 'react';

export default ({ click }) => (
  <div className="inputs">
    <button className="input" onClick={() => click('people')}>Person</button>
    <button className="input" onClick={() => click('planets')}>Planet</button>
    <button className="input" onClick={() => click('starships')}>Starship</button>
  </div>
);
