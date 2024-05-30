import React, { useState } from 'react';
import './MatchingExercise.css';

const mathConcepts = [
  { id: 1, concept: "Addition", match: "8 + 2" },
  { id: 2, concept: "Subtraction", match: "6 - 4" },
  { id: 3, concept: "Multiplication", match: "2 x 6" },
  { id: 4, concept: "Division", match: "10 ÷ 2" }
];

function MatchingExercise() {
  const [matches, setMatches] = useState(Array(mathConcepts.length).fill(null));
  const [progress, setProgress] = useState(0);
  const [reward, setReward] = useState('');

  const handleMatch = (conceptId, match) => {
    const newMatches = [...matches];
    newMatches[conceptId] = match;
    setMatches(newMatches);
    updateProgressAndReward();
  };

  const updateProgressAndReward = () => {
    const newProgress = (matches.filter(match => match !== null).length / mathConcepts.length) * 100;
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
    <div className="matching-exercise">
      <h2>Matching Exercise: Match the Math Concepts</h2><br></br><br></br>
      <div className="concepts-container">
        {mathConcepts.map((concept) => (
          <div key={concept.id} className="concept">
            <div className="concept-text">{concept.concept}</div>
            <div className="matches">
              {matches[concept.id] ? (
                <span className="match">{matches[concept.id]}</span>
              ) : (
                <div className="match-placeholder">Drag Match Here</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="matches-container">
        {mathConcepts.map((concept) => (
          <div
            key={concept.id}
            className="match"
            draggable
            onDragStart={() => handleMatch(concept.id, concept.match)}
          >
            {concept.match}
          </div>
        ))}
      </div>
      <div className="bottom-section"><br></br><br></br>
        <p>Progress: {progress}%</p>
        <p>Reward: {reward}</p>
      </div>
    </div>
  );
}

export default MatchingExercise;
