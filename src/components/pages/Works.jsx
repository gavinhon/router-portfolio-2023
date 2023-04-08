import React from 'react';
import { useState } from 'react';
import Work from './Work';
import WorkNav from './WorkNav';
import './Works.css';

function Works() {
  const [selected, setSelected] = useState();
  return (
    <div className='works'>
      <WorkNav setSelected={setSelected} />
      <Work selected={selected} />
    </div>
  );
}

export default Works;
