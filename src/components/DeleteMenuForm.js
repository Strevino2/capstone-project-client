import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

export function DeleteMenuForm(props) {
  const [filteredList, setFilteredList] = useState([]);
  const [input, setInput] = useState("");
  const [itemConfirmed, setItemConfirmed] = useState({
    id: "",
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
    fetch(
      `https://capstone-project-gilt-three.vercel.app/menu/${itemConfirmed.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => data);
    setItemConfirmed([]);
  };

  useEffect(() => {
    console.log("INPUT", input);
    inputSearch();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    console.log("FILTERED LIST", filteredList);
  }, [filteredList]);

  useEffect(() => {
    console.log("CONFIRMED ITEM", itemConfirmed);
    console.log("ID TO DELETE", itemConfirmed.id);
  }, [itemConfirmed]);

  async function inputSearch(e) {
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
  }

  return (
    <div className="admin-form">
      <h2>Use this form to remove a menu item</h2>
      <label forhtml="name">
        Search for item here:
        <Box sx={{ width: "100%" }}>
          <TextField
            type="text"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Search"
            onChange={handleChange}
          />
        </Box>
      </label>
      <br></br>
      <label forhtml="name">
        {" "}
        Confirm deletion item name:
        <Box sx={{ width: "100%" }}>
          <TextField
            value={itemConfirmed.menu_name}
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Name"
          />
        </Box>
      </label>{" "}
      <br></br>
      <Box sx={{ display: "flex", gap: "4px", width: "40%" }}>
        <Button
          sx={{ width: "100%", color: "black", background: "lightgrey" }}
          variant="solid"
          onClick={handleSubmit}
        >
          Delete
        </Button>
        <Button
          sx={{ width: "100%", color: "black", background: "lightgrey" }}
          variant="solid"
          // onClick={SetItemConfirme}
        >
          Clear
        </Button>
      </Box>{" "}
      <br></br>
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
    </div>
  );
}
