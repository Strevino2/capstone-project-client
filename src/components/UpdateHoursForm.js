import React, { useReducer } from "react";
import { useEffect } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

export const UpdateHoursForm = (props) => {
  const initialFormState = {
    dining_room: "",
    day: "",
    startHours: "",
    endHours: "",
  };

  const createUserReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_TEXT":
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

  useEffect(() => {
    console.log("INPUT", state);
    inputSearch();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleSubmit = () => {
    console.log(state);
    fetch("https://capstone-project-gilt-three.vercel.app/hours", {
      method: "PUT",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer Token",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  async function inputSearch(e) {
    const data = props.hours;
    const results = [];

    console.log(data, "DATA");
    for (let i = 0; i < data.length; i++) {
      const hoursDay = data[i].day.toLowerCase().includes(state);

      if (hoursDay) {
        console.log("Hours Day matches", hoursDay);
        results.push(data[i]);
      }
      console.log("RESULTS ", results);
      dispatch(results);
    }
  }

  return (
    <div className="admin-form">
      <h2>Use this form to update the hours of Operation</h2>
      <label forhtml="dining_room">
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
        >
          Clear
        </Button>
      </Box>{" "}
      {/* {state.map((row, idx) => (
        <ul key={idx}>
          <li
            onClick={() => {
              dispatch(row);
            }}
          >
            {row.menu_name}
          </li>
        </ul>
      ))} */}
    </div>
  );
};
