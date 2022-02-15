import phone from "../stripeMenu/images2/phone.svg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>
        Payments infrastructure for the internet
      </h1>
      <p>
        Millions of companies of all sizes—from startups to Fortune 500s—use
        Stripe’s software and APIs to accept payments, send payouts, and manage
        their businesses online.
      </p>
      <img src={phone} className={classes.image}/>
    </section>
  );
};

export default Hero;
