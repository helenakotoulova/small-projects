import { useEffect, useState } from "react";
import classes from "./Tabs.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
//let initial = true;

const Tabs = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedPeople = [];
      for (const key in data) {
        loadedPeople.push({ ...data[key] });
      }
      setPeople(loadedPeople);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const person = people[value];

  /*Bud takhle:
  useEffect(()=> {
    if (initial) {
        initial=false;
        return;
    } else {
        setPersonId(people[0].id)
    }
  },[people])

   <main>
            {people.map((item,index)=> {
                if (item.id === personId) {
                    return <article key={item.id}>
                        <h3>{item.title}</h3>
                        <h4>{item.dates}</h4>
                    </article>
                }
            })}
      </main>
  */

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Our Experince</h1>
      <div className={classes.underline}></div>
      <section className={classes.mainSection}>
        <aside>
          <ul className={classes.list}>
            {people.map((person, personIndex) => (
              <li key={personIndex}>
                <button className={`${classes.button} ${value===personIndex? classes['chosenButton']:''}`} onClick={() => setValue(personIndex)}>
                  {person.company}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main>
          <article key={person.id}>
            <h3>{person.title}</h3>
            <h3>{person.company}</h3>
            <h4>{person.dates}</h4>
            {person.duties.map((duty, index) => (
              <div className={classes.duty}>
                 <FaAngleDoubleRight className={classes.badge}/>
                 <p key={index}>{duty}</p>
              </div>
            ))}
          </article>
        </main>
      </section>
    </section>
  );
};

export default Tabs;
