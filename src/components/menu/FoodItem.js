import classes from "./FoodItem.module.css";

const FoodItem = ({ food }) => {
  const { title, price, img, desc } = food;
  return (
    <article className={classes.article}>
      <img
        src={img}
        alt={title}
        className={`${
          img === "./images/item-3.jpeg" ? classes.imgSpecial : classes.img
        }`}
      />
      <div>
        <div className={classes.intro}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.price}>{price}$</p>
        </div>
        <div className={classes.desc}>{desc}</div>
      </div>
    </article>
  );
};
export default FoodItem;
