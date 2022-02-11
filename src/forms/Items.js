import { useEffect, useState } from "react";
import classes from "./Items.module.css";
import DUMMY_ITEMS from "./data";

const dummyColors = [];
DUMMY_ITEMS.forEach((item) => dummyColors.push(item.color));
const colors = [...new Set(dummyColors)];

const Items = () => {
  const [price, setPrice] = useState(100);
  const [color, setColor] = useState(colors);
  const [filtered, setFiltered] = useState(DUMMY_ITEMS);

  useEffect(() => {
    setFiltered(
      DUMMY_ITEMS.filter(
        (item) => color.includes(item.color) && +item.price <= price
      )
    );
  }, [price, color]);

  return (
    <section>
      <h1 style={{ textAlign: "center", margin: "2rem" }}>E-shop</h1>
      <div className={classes.sliderActions}>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={classes.slider}
        />
        <span>$</span>
      </div>
      <div className={classes.colorActions}>
        <label>Choose Color!</label>
        {colors.map((itemColor, itemColorIndex) => (
          <input
            type="radio"
            name={itemColor}
            key={itemColorIndex}
            onClick={() =>
              setColor((prev) => {
                const existingColor = prev.find((item) => item === itemColor);
                let updatedColors = [...prev];
                if (existingColor) {
                  updatedColors = updatedColors.filter(
                    (color) => color !== existingColor
                  );
                } else {
                  updatedColors.push(itemColor);
                }
                return updatedColors;
              })
            }
            className={classes.colorButtons}
            style={{
              backgroundColor: itemColor,
              outline: color.includes(itemColor) ? "1px solid black" : "",
              outlineOffset: "2px",
            }}
          />
        ))}
      </div>
      <div className={classes.grid}>
        {filtered.map((item) => (
          <article key={item.id} className={classes.article}>
            <img src={item.image} alt={item.name} className={classes.img} />
            <div className={classes.info}>
              <h3>{item.name}</h3>
              <p>{item.color}</p>
              <p>{item.price}$</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Items;
