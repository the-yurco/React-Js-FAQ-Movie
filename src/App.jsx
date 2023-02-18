import React from "react";
import Question from "./components/Question";
import questions from "./data";

function App() {
  return (
    <div className="App">
      {questions.map((oneQuestion) => {
        return <Question key={oneQuestion.id} {...oneQuestion} />;
      })}
    </div>
  );
}

export default App;
