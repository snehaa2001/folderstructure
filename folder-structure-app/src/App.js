import React from 'react';
import './App.css'; // You can style the entire app here
import jsonData from './data';
import FolderStructure from './FolderStructure';
import FolderItem from './FolderItem';

function App() {
  // Define your folder structure data
  const folderData = [
    {
      Folder1: ['Item 1', 'Item 2'],
    },
    {
      Folder2: ['Item 3', 'Item 4'],
    },
  ];

  return (
    <div className="app">
      <FolderStructure heading="Folder Structure" data={folderData} />
      {jsonData.map((folderData, index) => (
        <FolderItem key={index} name={Object.keys(folderData)[0]} items={folderData[Object.keys(folderData)[0]]} />
      ))}
    </div>
  );
}

export default App;
