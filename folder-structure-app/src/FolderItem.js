import React, { useState } from 'react';
import './FolderItem.css';

function FolderItem({ name, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFolder}>
        {isOpen ? '-' : '+'} {name}
      </div>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {typeof item === 'object' ? (
                <FolderItem name={Object.keys(item)[0]} items={item[Object.keys(item)[0]]} />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FolderItem;
