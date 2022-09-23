import React from "react";
import { useState, useEffect } from "react";

export default function Search(props) {
  const [filteredList, setFilteredList] = useState([]);
  const [input, setInput] = useState("");
  const [itemConfirmed, setItemConfirmed] = useState({
    menu_type: "",
    menu_name: "",
    menu_price: "",
    menu_description: "",
  });

  console.log("PROPS", props);

  const handleChange = (e) => {
    console.log("CHANGE", e.target.value);
    setInput(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    console.log("SUBMITTED");
  };

  useEffect(() => {
    console.log("INPUT", input);
    function inputSearch() {
      const data = props.menu;
      const results = [];
  
      console.log(data, "DATA");
      for (let i = 0; i < data.length; i++) {
        const menuName = data[i].menu_name.toLowerCase().includes(input);
  
        if (menuName) {
          console.log("MENU NAME MATCHES", menuName);
          results.push(data[i]);
        }
        console.log("RESULTS ", results);
        setFilteredList(results);
      }
    };
    inputSearch()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    console.log("FILTERED LIST", filteredList);
  }, [filteredList]);

  useEffect(() => {
    console.log("CONFIRMED ITEM", itemConfirmed);
  }, [itemConfirmed]);

  // async function inputSearch(e) {
  //   const data = props.menu;
  //   const results = [];

  //   console.log(data, "DATA");
  //   for (let i = 0; i < data.length; i++) {
  //     const menuName = data[i].menu_name.toLowerCase().includes(input);

  //     if (menuName) {
  //       console.log("MENU NAME MATCHES", menuName);
  //       results.push(data[i]);
  //     }
  //     console.log("RESULTS ", results);
  //     setFilteredList(results);
  //   }
  // }

  return (
    <div>
      {" "}
      <label forhtml="search">Search</label>
      <input
        placeholder="Search menu items"
        type="text"
        onChange={handleChange}
      ></input>
      <label forhtml="name">Name</label>
      <input
        value={itemConfirmed.menu_name}
        onChange={(e) =>
          setItemConfirmed((prevState) => {
            let copy = { ...prevState };
            copy.menu_name = e.target.value;
            setItemConfirmed(copy);
            return copy;
          })
        }
        type="text"
      ></input>{" "}
      <br></br>
      <label forhtml="price">Price</label>
      <input value={itemConfirmed.menu_price} type="text"></input>
      <br></br>
      <label forhtml="decription">Description</label>
      <input value={itemConfirmed.menu_description} type="text"></input>
      {filteredList.map((row, idx) => (
        <ul key={idx}>
          <li
            onClick={() => {
              setItemConfirmed(row);
            }}
          >
            {row.menu_name}
          </li>
        </ul>
      ))}
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
