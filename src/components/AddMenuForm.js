import React, { useReducer } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

export const AddMenuForm = () => {
  const initialFormState = {
    menu_type: "",
    menu_name: "",
    menu_price: "",
    menu_description: "",
  };

  const handleClear = (e) => {
    dispatch({
      field: e.target.name,
      payload: "",
      type: "HANDLE_CLEAR_TEXT",
    });
  }

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
  };

  const handleSubmit = () => {
    console.log(state);
    fetch("https://capstone-project-gilt-three.vercel.app/menu", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer Token",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
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
            // value={initialFormState.menu_type}
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
            value={initialFormState.menu_name}
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
            value={initialFormState.menu_price}
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
            value={initialFormState.menu_description}
            id="edit-form"
            variant="standard"
            sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
            placeholder="Menu description"
            onChange={handleChange}
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
          Add
        </Button>
        <Button
          sx={{ width: "100%", color: "black", background: "lightgrey" }}
          variant="solid"
          onClick={handleClear}
        >
          Clear
        </Button>
      </Box>{" "}
    </div>
  );
};
