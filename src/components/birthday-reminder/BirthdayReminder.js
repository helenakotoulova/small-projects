import data from "./data";
import classes from "./BirthdayReminder.module.css";
import { useState } from "react";

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  const clearAllHandler = () => {
    setPeople([]);
  };

  if (people.length === 0) {
    return (
      <div className={classes.card}>
        <h1>Birthday Reminder</h1>
        <h2>0 Birthdays Today</h2>
      </div>
    );
  }

  return (
    <div className={classes.card}>
      <h1>Birthday Reminder</h1>
      <h2>5 Birthdays Today:</h2>
      <ul className={classes.list}>
        {people.map((item, index) => (
          <li key={item.id}>
            <img src={item.image} alt="Person" />
            <div className={classes.info}>
              <h3>{item.name}</h3>
              <p>{item.age} years</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.actions}>
        <button onClick={clearAllHandler}>Clear All</button>
      </div>
    </div>
  );
};

export default BirthdayReminder;
