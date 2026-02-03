import { MouseEvent, useState } from "react";

//Define the shape or interface of the component to pass as a Prop. { items: [], heading: string}, to avoid hardcoding.
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //State hook, to tell React that this component can have data or state that will change over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler.Replaced by selectedIndex to handle the onClick event.
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
