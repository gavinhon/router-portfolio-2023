import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function WorkNav({ setSelected }) {
  const items = [
    {
      id: 1,
      name: 'Hexagon AB',
      role: 'Presales Engineer',
      tenure: '2022 - Present',
      description: [
        'Develop demonstration, sample and proof-of-concept applications.',
        'Provide training and consultancy services for customers to support them.',
        'Provide technical presentations to clients about the Hexagon products.',
        'Create technical documents and internal presentations on product capabilities and competitive advantages to share with the team',
      ],
    },
    {
      id: 2,
      name: 'Singapore Land Authority',
      role: 'Principal Geospatial Specialist',
      tenure: '2019 - 2022',
      description: [
        'Frontend development and optimization of a 3D web map using open source technology in collaboration with designer and product owner.',
        'Built automated processes for data processing according to application requirements.',
        'Engaging public and private sectors with sales team to come up with proof-of-concept.',
        'Research on potential improvement in the usage of 3D data and emerging open source libraries based on OGC standards.',
      ],
    },
    {
      id: 3,
      name: 'Micron Technology',
      role: 'IT Engineer',
      tenure: '2017 - 2019',
      description: [
        'Develop, test, deploy and maintenance of applications used by manufacturing tools.',
        'Develop automated solutions in work process through scripting for manufacturing stakeholders and IT team.',
        'Perform testing, deployment and maintenance of vendor products.',
        'Provide L2 support for IT services.',
      ],
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  function handleClick(item) {
    setSelected(item);
    setSelectedItem(item);
  }
  useEffect(() => {
    setSelected(items[0]);
    setSelectedItem(items[0]);
  }, [items]);
  return (
    <div className='worknav'>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
            className={selectedItem?.id === item.id ? 'selected' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkNav;
