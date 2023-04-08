import React from 'react';

function Work({ selected }) {
  return (
    <div className='work'>
      {selected ? (
        <div>
          <h2>{selected.role}</h2>

          <p>Tenure: {selected.tenure}</p>
          <ul>
            {selected.description.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please select an item</p>
      )}
    </div>
  );
}

export default Work;
