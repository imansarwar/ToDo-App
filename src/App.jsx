import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemAdd = (event) => {
    setInputList(event.target.value);
  };

  const addListItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const removeItems = (id) => {
    // console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add a Item"
            onChange={itemAdd}
          />
          <button onClick={addListItem}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemValue, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  onSelect={removeItems}
                  text={itemValue}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
