import { useRef, useState } from "react";
import data from "./data";
import classes from './LoremIpsum.module.css';

let initial = true;
const LoremIpsum = () => {
  const numberInputRef = useRef();
  const [paragraph, setParagraph] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNumber = numberInputRef.current.value;
    setParagraph(enteredNumber);
  };
  let content;

  if (initial) {
    initial = false;
    content = <p>Start generating!</p>;
  } else if ((paragraph <= 0 || paragraph > data.length) && !initial) {
    content = <p>Invalid input!</p>;
  } else {
    content = data.map((par, parIndex) => {
      if (parIndex + 1 <= paragraph) {
        return <p key={parIndex} className={classes.text}>{par}</p>;
      }
    });
  }

  return (
    <section className={classes.section}>
      <h1>Tired of boring Lorem Ipsum?</h1>
      <form onSubmit={submitHandler}>
        <label>Paragraphs:</label>
        <input type="number" ref={numberInputRef} />
        <button type="submit">Generate!</button>
      </form>
      {content}
    </section>
  );
};

export default LoremIpsum;
