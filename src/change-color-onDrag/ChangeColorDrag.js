import classes from "./ChangeColorDrag.module.css";
import { useEffect, useState } from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ChangeColorDrag = () => {
  const [opacity, setOpacity] = useState(0);
  const maxX = window.innerWidth / 2;
  const maxY = window.innerHeight / 2;
  const dragHandler = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const opacityX = Math.abs(x - maxX) / maxX;
    const opacityY = Math.abs(y - maxY) / maxY;
    setOpacity(Math.max(opacityX, opacityY));
  };
  const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(counter);
  console.log("render");
  useEffect(() => {
      console.log('first useEff')
    if (counter === 3) {
      return;
    }
    const timer = setTimeout(() => {
      setCounter((prev) => prev + 1);
      console.log('timeout')
    }, 3000);
  }, [counter]);

  useEffect(() => {
      console.log('second useEff')
    if (counter % 3 === 0) {
      setShow("fizz");
    } else {
      setShow(counter);
    }
  }, [counter]);

  return (
    <>
      <div
        className={classes.background}
        style={{ opacity: `${opacity}` }}
      ></div>
      <div className={classes.drag} onDrag={dragHandler} onDragEnd={()=> setOpacity(0)} draggable></div>
      <p>{counter}</p>
    </>
  );
};
export default ChangeColorDrag;

/*
<>
      <DragDropContext>
        <Droppable droppableId="square">
          {(provided) => (
            <div
              className={classes.outer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Draggable key={id} draggableId={id}>
                {(provided) => (
                  <div
                  id={id}
                    ref={provided.innerRef}
                    className={classes.inner}
                    onDrag={dragHandler}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  ></div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
*/

/* 
const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(counter);
useEffect(() => {
    if (counter === 15) {
      return;
    }
    const timer = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }, [counter]);

  useEffect(() => {
    if (counter % 3 === 0) {
      setShow("fizz");
    } else {
      setShow(counter);
    }
  }, [counter]);
*/
