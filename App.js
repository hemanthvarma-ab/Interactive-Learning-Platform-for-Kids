import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from './Quiz';
import HomePage from './HomePage';
import DragDropGame from './DragDropGame';
import MatchingExercise from './MatchingExercise'; 

const quizQuestions = [
  { id: 1, question: "Which of the following is two wheeler vehicle?", options:["Taxi","Bike","Auto","Train"], answer: "Bike" },
  { id: 2, question: "How many legs do spiders have?", options: ["Four", "Six", "Eight", "Ten"], answer: "Eight" },
  { id: 3, question: "How many colours are there in Rainbow?", options: ["4", "5", "6", "7"], answer: "7"}
];

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/quiz">
            <Quiz quizQuestions={quizQuestions} />
          </Route>
          <Route path="/dragdrop">
            <DragDropGame />
          </Route>
          <Route path="/matching">
            <MatchingExercise /> 
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
