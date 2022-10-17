import React, { useReducer } from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import cookie from "cookie";

export const AddMenuForm = () => {
  const [success, setSuccess] = useState(false);

  const initialFormState = {
    menu_type: "",
    menu_name: "",
    menu_price: "",
    menu_description: "",
  };

  let cookies = cookie.parse(document.cookie);

  const createUserReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_TEXT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "HANDLE_CLEAR_TEXT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(createUserReducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      payload: e.target.value,
      type: "HANDLE_INPUT_TEXT",
    });
    setSuccess(false);
  };

  const handleSubmit = () => {
    fetch("https://capstone-project-gilt-three.vercel.app/menu", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies.token}`,
      },
    }).then((res) => {
      if (res.status >= 200 && res.status <= 299) {
        setSuccess(true);
        return res.json();
      }
    });
  };

  return (
    <div className="admin-form">
      <h2>Use this form to add a menu item</h2>
      <label forhtml="menu_type">
        {" "}
        Menu type:
        <Box sx={{ width: "100%" }}>
          <TextField
            type="text"
            name="menu_type"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Menu type"
            onChange={handleChange}
          />
        </Box>
      </label>{" "}
      <br></br>
      <label forhtml="menu_name">
        {" "}
        Menu Name:
        <Box sx={{ width: "100%" }}>
          <TextField
            type="text"
            name="menu_name"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Menu name"
            onChange={handleChange}
          />
        </Box>
      </label>{" "}
      <br></br>
      <label forhtml="menu_price">
        {" "}
        Menu price:
        <Box sx={{ width: "100%" }}>
          <TextField
            type="text"
            name="menu_price"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Menu price"
            onChange={handleChange}
          />
        </Box>
      </label>{" "}
      <br></br>
      <label forhtml="menu_description">
        {" "}
        Menu decription:
        <Box sx={{ width: "100%" }}>
          <TextField
            type="text"
            name="menu_description"
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Menu description"
            onChange={handleChange}
          />
        </Box>
      </label>{" "}
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
          Add
        </Button>
      </Box>{" "}
    </div>
  );
};
