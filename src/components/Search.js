import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

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

  // const handleSubmit = () => {
  //   console.log("SUBMITTED");
  // };

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
    <div className="admin">
      {" "}
      <div className="admin-form">
        <h2>Use this form to update a menu item</h2>
        <label forhtml="name">Search for item here:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Search"
            onChange={handleChange}
          />
        </Box>
        <br></br>
        <label forhtml="name"> Update name:</label>
        <Box sx={{ width: "40%" }}>
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
        </Box>{" "}
        <br></br>
        <label forhtml="price">Update price:</label>
        <Box sx={{ width: "40%" }}>
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
        </Box>{" "}
        <br></br>
        <label forhtml="decription">Update description:</label>
        <Box sx={{ width: "40%" }}>
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
        <br></br>
        <Box sx={{ display: "flex", gap: "4px", width: "40%" }}>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Edit
          </Button>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Clear
          </Button>
        </Box>{" "}
      </div>
      <div className="admin-form">
        <h2>Use this form to add a menu item</h2>
        <label forhtml="menu_type"> Menu type:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            // value={itemConfirmed.menu_name}
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Menu type"
            onChange={(e) =>
              setItemConfirmed((prevState) => {
                let copy = { ...prevState };
                copy.menu_type = e.target.value;
                setItemConfirmed(copy);
                return copy;
              })
            }
          />
        </Box>{" "}
        <br></br>
        <label forhtml="name"> Name:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            // value={itemConfirmed.menu_name}
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
        </Box>{" "}
        <br></br>
        <label forhtml="price">Price:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            // value={itemConfirmed.menu_price}
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
        </Box>{" "}
        <br></br>
        <label forhtml="decription">Description:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            // value={itemConfirmed.menu_description}
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
        <br></br>
        <Box sx={{ display: "flex", gap: "4px", width: "40%" }}>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Add
          </Button>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Clear
          </Button>
        </Box>{" "}
      </div>
      <div className="admin-form">
        <h2>Use this form to remove a menu item</h2>
        <label forhtml="name">Search for item here:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            id="edit-form"
            // value={itemConfirmed.menu_description}
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Search"
            onChange={handleChange}
          />
        </Box>
        <br></br>
        <Box sx={{ display: "flex", gap: "4px", width: "40%" }}>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Delete
          </Button>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Clear
          </Button>
        </Box>{" "}
      </div>
      <div className="admin-form">
        <h2 className="update-form">Use this form to update the hours of operation</h2>
        <label forhtml="name">Choose the day here:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Search day of the week"
            onChange={handleChange}
          />
        </Box>
        <br></br>
        <label forhtml="name"> Update opening hours:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            // value={itemConfirmed.menu_name}
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Opening time"
            onChange={(e) =>
              setItemConfirmed((prevState) => {
                let copy = { ...prevState };
                copy.menu_name = e.target.value;
                setItemConfirmed(copy);
                return copy;
              })
            }
          />
        </Box>{" "}
        <br></br>
        <label forhtml="price">Update closing hours:</label>
        <Box sx={{ width: "40%" }}>
          <TextField
            type="text"
            id="edit-form"
            // value={itemConfirmed.menu_description}
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Closing time"
            onChange={(e) =>
              setItemConfirmed((prevState) => {
                let copy = { ...prevState };
                copy.menu_price = e.target.value;
                setItemConfirmed(copy);
                return copy;
              })
            }
          />
        </Box>{" "}
        <br></br>
        <Box sx={{ display: "flex", gap: "4px", width: "40%" }}>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Update
          </Button>
          <Button
            sx={{ width: "100%", color: "black", background: "lightgrey" }}
            variant="solid"
          >
            Clear
          </Button>
        </Box>{" "}
      </div>
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
