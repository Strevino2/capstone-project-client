import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import cookie from "cookie";

export default function DeleteMenuFormCopy(props) {
  const [success, setSuccess] = useState(false);
  const [itemConfirmed, setItemConfirmed] = useState({
    id: "",
    menu_type: "",
    menu_name: "",
    menu_price: "",
    menu_description: "",
  });

  const handleSubmit = () => {
    fetch(
      `https://capstone-project-gilt-three.vercel.app/menu/${itemConfirmed.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log("EDIT RESPONSE", res);
        console.log("STATUS RESPONSE", typeof res.status);
        if (res.status >= 200 && res.status <= 299) {
          setSuccess(true);
          return res.json();
        }
      })
      .then((data) => data);
  };

  let cookies = cookie.parse(document.cookie);

  const handleClear = () => {
    setItemConfirmed({
      id: "",
      menu_type: "",
      menu_name: "",
      menu_price: "",
      menu_description: "",
    });
    setSuccess(false);
  };

  const handleChangeState = (_, newValue) => {
    setItemConfirmed({
      id: newValue.id,
      menu_type: newValue.menu_type,
      menu_name: newValue.menu_name,
      menu_price: newValue.menu_price,
      menu_description: newValue.menu_description,
    });
    setSuccess(false);
  };

  return (
    <form className="admin-form">
      <h2>Use this form to delete a menu item</h2>
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
      <label forhtml="name">
        {" "}
        Delete Menu Item:
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
      {success && (
        <p style={{ color: "green" }} className="success-message">
          Success!
        </p>
      )}
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
          onClick={handleClear}
        >
          Clear
        </Button>
      </Box>{" "}
    </form>
  );
}
