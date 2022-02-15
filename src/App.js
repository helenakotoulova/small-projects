//import BirthdayReminder from "./components/birthday-reminder/BirthdayReminder";
//import Tours from "./components/tours/Tours";
//import { useState, useEffect } from "react";
//import SliderPokus2 from "./components/reviews/SliderPokus2";
//import Slider from "./components/reviews/Slider";
//import Reviews from "./components/reviews/Reviews";
//import Accordion from "./components/accordion/Accordion";
//import Menu from "./components/menu/Menu";
//import Grocery from "./grocery-bud/Grocery";
//import SubApp from "./cocktails/SubApp";
//import MarkDown from "./markdown-toggle/Markdown";
//import Subapp from "./stripeMenu/Subapp";
//import ChangeColorDrag from "./change-color-onDrag/ChangeColorDrag";
import Navbar from "./navbar/Navbar";
import Subapp from "./stripe-ja/Subapp";
//import GroceryWithReducer from "./grocery-bud/GroceryWithReducer";
//import LoremIpsum from "./loremIpsum/LoremIpsum";
//import Tabs from "./tabs/Tabs";
//import Items from "./forms/Items";
//import Trial from "./trial/Trial";

function App() {
  return (
    <Navbar />
  );
}

export default App;


/*
function App() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState('light-theme');
  useEffect(() => {
    if (dark) {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, [dark]);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => setDark((prev) => !prev)}>Toggle Scheme</button>
    </>
  );
}

export default App;

*/