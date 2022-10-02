import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

export default function EditMenuForm(props) {
  const [filteredList, setFilteredList] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [itemConfirmed, setItemConfirmed] = useState({
    id: "",
    menu_type: "",
    menu_name: "",
    menu_price: "",
    menu_description: "",
  });

  console.log("PROPS", props);

  const handleSubmit = () => {
    fetch(
      `https://capstone-project-gilt-three.vercel.app/menu/${itemConfirmed.id}`,
      {
        method: "PUT",
        body: JSON.stringify(itemConfirmed),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => setInput(""))
      .catch((e) => {
        setError("Error editing menu");
        console.error("ERROR EDITING", e);
      });
  };

  const handleClear = () => {
    setItemConfirmed({
      id: "",
      menu_type: "",
      menu_name: "",
      menu_price: "",
      menu_description: "",
    });
    setInput("");
  };
  useEffect(() => {
    console.log("INPUT", input);
    inputSearch();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  console.log("ERROR", error)

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

  const handleChangeState = (_, newValue) => {
    console.log("NEW VALUE", newValue);
    setItemConfirmed({
      id: newValue.id,
      menu_type: newValue.menu_type,
      menu_name: newValue.menu_name,
      menu_price: newValue.menu_price,
      menu_description: newValue.menu_description,
    });
  };

  console.log("MENU PROPS", props.menu);
  console.log("PROPS", props);

  return (
    <div className="admin">
      <form className="admin-form">
        <h2>Use this form to update a menu item</h2>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={props.menu}
          getOptionLabel={(option) => option.menu_name}
          sx={{ width: 300 }}
          value={itemConfirmed.menu_name.title}
          onChange={(_, newValue) => handleChangeState(_, newValue)}
          renderInput={(params) => <TextField {...params} label="Menu" />}
        />
        <br></br>
        <div className="edit-search">
          {filteredList && (
            <ul className="filtered-list">
              {filteredList.map((row, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setItemConfirmed(row);
                    setFilteredList([]);
                  }}
                >
                  {row.menu_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <label forhtml="name">
          {" "}
          Update name:
          <Box sx={{ width: "100%" }}>
            <TextField
              type="text"
              value={itemConfirmed.menu_name}
              id="edit-form"
              variant="standard"
              sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
              placeholder="Name"
              onChange={(e) =>
                setItemConfirmed((prevState) => {
                  let copy = { ...prevState };
                  copy.menu_name = e.target.value;
                  setItemConfirmed(copy);
                  return copy;
                })
              }
            />
          </Box>
        </label>{" "}
        <br></br>
        <label forhtml="price">
          Update price:
          <Box sx={{ width: "100%" }}>
            <TextField
              type="text"
              value={itemConfirmed.menu_price}
              id="edit-form"
              variant="standard"
              sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
              placeholder="Price"
              onChange={(e) =>
                setItemConfirmed((prevState) => {
                  let copy = { ...prevState };
                  copy.menu_price = e.target.value;
                  setItemConfirmed(copy);
                  return copy;
                })
              }
            />
          </Box>
        </label>{" "}
        <br></br>
        <label forhtml="decription">
          Update description:
          <Box sx={{ width: "100%" }}>
            <TextField
              type="text"
              value={itemConfirmed.menu_description}
              id="edit-form"
              variant="standard"
              sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
              placeholder="Description"
              onChange={(e) =>
                setItemConfirmed((prevState) => {
                  let copy = { ...prevState };
                  copy.menu_description = e.target.value;
                  setItemConfirmed(copy);
                  return copy;
                })
              }
            />{" "}
          </Box>
        </label>
        <br></br>
        <Box sx={{ display: "flex", gap: "4px", width: "40%" }}>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
            onClick={handleSubmit}
          >
            Edit
          </Button>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Box>{" "}
      </form>
    </div>
  );
}
