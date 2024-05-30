import React, { useState, useEffect } from 'react';
import './DragDropGame.css';

const items = [
  { id: 1, number: 1, name: "One", color: "red" },
  { id: 2, number: 2, name: "Two", color: "blue" },
  { id: 3, number: 3, name: "Three", color: "green" },
  { id: 4, number: 4, name: "four", color: "yellow"}
];

function DragDropGame() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItem, setDroppedItem] = useState(null);
  const [score, setScore] = useState(0);
  const [matchedItems, setMatchedItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [reward, setReward] = useState('');

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (item, target) => {
    if (draggedItem && draggedItem.id === target.id) {
      setScore(score + 1);
      setMatchedItems([...matchedItems, draggedItem]);
      setDroppedItem(draggedItem);
    } else {
      alert('Oops! Try again.');
    }
    setDraggedItem(null);
    updateProgressAndReward();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (matchedItems.length === items.length) {
      alert('Congratulations! You have completed all items!');
      setDroppedItem(null);
      setMatchedItems([]);
    }
  }, [matchedItems]);

  const updateProgressAndReward = () => {
    const newProgress = ((score / items.length) * 100).toFixed(2);
    setProgress(newProgress);

    if (newProgress >= 25 && newProgress < 50) {
      setReward('Bronze Badge');
    } else if (newProgress >= 50 && newProgress < 75) {
      setReward('Silver Badge');
    } else if (newProgress >= 75 && newProgress < 100) {
      setReward('Gold Badge');
    } else if (newProgress === 100) {
      setReward('Platinum Badge');
    }
  };

  return (
    <div className="drag-drop-game">
      <h3>Drag the Numbers to Match Their Names</h3>
      <div className="drag-items-container">
        {items.map((item) => (
          <div
            key={item.id}
            className="drag-item"
            draggable
            onDragStart={() => handleDragStart(item)}
            style={{ backgroundColor: item.color }}
          >
            {item.number}
          </div>
        ))}
      </div>
      <div className="drop-areas-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`drop-area ${droppedItem && droppedItem.id === item.id ? 'filled' : ''}`}
            onDrop={() => handleDrop(item, item)}
            onDragOver={handleDragOver}
            style={{ backgroundColor: droppedItem && droppedItem.id === item.id ? droppedItem.color : 'transparent' }}
          >
            {droppedItem && droppedItem.id === item.id ? droppedItem.number : `Drop here for ${item.name}`}
          </div>
        ))}
      </div>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Progress: {progress}%</p>
        <p>Reward: {reward}</p>
      </div>
    </div>
  );
}

export default DragDropGame;
