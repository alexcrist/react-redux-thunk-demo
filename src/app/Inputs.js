import React from 'react';

export default ({ click }) => (
  <div className="inputs">
    <button className="btn btn-primary input" onClick={() => click('people')}>Person</button>
    <button className="btn btn-primary input" onClick={() => click('planets')}>Planet</button>
    <button className="btn btn-primary input" onClick={() => click('starships')}>Starship</button>
  </div>
);
