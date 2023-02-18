import React, { useState } from "react";
import "./Question.css";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <section>
        <div className="wrapper">
          <h2>{title}</h2>
          <button onClick={() => setShow(!show)}>Answer</button>
        </div>
        <div>
          <p>{show && <p>{info}</p>}</p>
        </div>
      </section>
    </div>
  );
};

export default Question;
