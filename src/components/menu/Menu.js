import data from "./data";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import classes from "./Menu.module.css";

const dataCategories = [];
data.forEach((item) => dataCategories.push(item.category));
const allCategories = [...new Set(dataCategories)]; // breakfast,lunch, dinner
const allCategories2 = [...new Set(data.map(item => item.category))]; // jina moznost. map mi primo vraci array. 

const Menu = () => {
  const [category, setCategory] = useState(allCategories);
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    if (category === allCategories) {
      setFiltered(data);
    } else {
      setFiltered(data.filter((item) => category === item.category));
    }
  }, [category]);

  return (
    <section className={classes.section}>
      <header>
        <h1 className={classes.title}>Food Menu</h1>
        <div className={classes.underline}></div>
      </header>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <button
              style={{
                borderBottom:
                  category === allCategories ? "2px solid burlywood" : "",
              }}
              onClick={() => setCategory(allCategories)}
            >
              All
            </button>
          </li>
          {allCategories.map((foodCat, index) => (
            <li key={index}>
              <button
                style={{
                  borderBottom:
                    category === foodCat ? "2px solid burlywood" : "",
                }}
                onClick={() => setCategory(foodCat)}
              >
                {foodCat}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className={classes.main}>
        {filtered.map((item, index) => (
          <FoodItem food={item} key={item.id} />
        ))}
      </main>
    </section>
  );
};

export default Menu;
