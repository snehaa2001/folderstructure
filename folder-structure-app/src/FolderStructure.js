import React from 'react';
import './FolderItem.css'; // You can use the same CSS file for styling

function FolderItem({ name, items }) {
  // ... The FolderItem component code here
}

function FolderStructure({ heading, data }) {
  return (
    <div className="folder-structure">
      <h2>{heading}</h2>
      <FolderItem name={heading} items={data} />
    </div>
  );
}

export default FolderStructure;
