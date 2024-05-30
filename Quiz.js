import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ quizQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reward, setReward] = useState('');

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
    updateProgressAndReward();
  };

  const updateProgressAndReward = () => {
    const newProgress = ((score / quizQuestions.length) * 100).toFixed(2);
    setProgress(newProgress);

    if (newProgress >= 25 && newProgress < 50) {
      setReward('Bronze Badge');
    } else if (newProgress >= 50 && newProgress < 65) {
      setReward('Silver Badge');
    } else if (newProgress >= 65 && newProgress <= 100) {
      setReward('Gold Badge');
    } 
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div>
          <p>You scored {score} out of {quizQuestions.length}</p>
          <p>Progress: {progress}%</p>
          <p>Reward: {reward}</p>
        </div>
      ) : (
        <div>
          <div>
            <p>{quizQuestions[currentQuestionIndex].question}</p>
          </div>
          <div>
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option === quizQuestions[currentQuestionIndex].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
