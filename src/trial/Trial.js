import classes from "./Trial.module.css";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

const Trial = () => {
  const numbers = [0, 1, 2, 3,4,5];

  const checkIndex = (number) => {
    if (number === -1) {
      return numbers.length - 1;
    } else if (number === numbers.length) {
      return 0;
    } else {
      return number;
    }
  };
  const [index, setIndex] = useState(0);

  const prevHandler = () => {
    setIndex((prevIndex) => {
      const number = prevIndex - 1;
      const checkedNumber = checkIndex(number);
      setIndex(checkedNumber);
    });
  };

  const nextHandler = () => {
    setIndex((prevIndex) => {
      const number = prevIndex + 1;
      const checkedNumber = checkIndex(number);
      setIndex(checkedNumber);
    });
  };
  return (
    <>
      <div className={classes.parent}>
        {numbers.map((number, numberIndex) => {
          let position = "next";
          if (numberIndex === index) {
            position = "active";
          } else if (
            numberIndex === index - 1 ||
            (index === 0 && numberIndex === numbers.length - 1)
          ) {
            position = "prev";
          }

          return (
            <div className={`${classes.child} ${classes[position]}`}>
              {number}
            </div>
          );
        })}
      </div>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
    </>
  );
};

export default Trial;
