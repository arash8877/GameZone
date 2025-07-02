import { useState } from "react";

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
 

  return (
    <>
      <h1>List</h1>
    <ul className="list-group">
        {items.map((item, index) => {
            return (
                <li
                    key={index}
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                    onClick={() => setSelectedIndex(index)}
                >
                    {item}
                </li>
            );
        })}
    </ul>
    </>
  );
};

export default ListGroup;
