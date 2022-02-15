import { Fragment, useState } from "react";
import classes from "./MarkDown.module.css";
import ReactMarkdown from "react-markdown";

const MarkDown = () => {
  const [text, setText] = useState("# MarkDown Preview");

  return (
    <Fragment>
      <section className={classes.section}>
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea onChange={(e) => setText(e.target.value)} value={text} />
        </form>
        <div>{text}</div>
        <article className={classes.article}>
          <ReactMarkdown className={classes.markdown}>{text}</ReactMarkdown>
        </article>
      </section>
    </Fragment>
  );
};

export default MarkDown;
