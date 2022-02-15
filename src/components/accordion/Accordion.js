import questions from "./data";
import { useState } from "react";
import classes from "./Accordion.module.css";

const Accordion = () => {
  const initialShow = new Array(questions.length).fill(false);
  const [showMore, setShowMore] = useState(initialShow);

  const clickHandler = (index) => {
    setShowMore((prevState) => {
      let updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>Questions And Answers About Login</h1>
      <div className={classes.questions}>
        {questions.map((question, index) => {
          return (
            <div key={question.id} className={classes.question}>
              <div className={classes.questionIntro}>
                <h2>{question.title}</h2>
                <button onClick={clickHandler.bind(null, question.id - 1)}
                style={{backgroundColor: showMore[question.id-1]? '#b895b8': ''}}
                >
                  {showMore[question.id - 1] ? "-" : "+"}
                </button>
              </div>
              {showMore[question.id - 1] && <p>{question.info}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
