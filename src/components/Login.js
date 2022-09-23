import * as React from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

export default function Login() {
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    console.log("CLICKED");
    fetch("https://capstone-project-gilt-three.vercel.app/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Token",
      },
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((msg) => console.log("DATA", msg));
  };

  const handleChange = (e) => {
    // console.log("E", e);
    // console.log("V", e.target.value);
    // setLogin(e.target.value);
    setLogin((prevState) => {
      let copy = { ...prevState };
      copy.username = e.target.value;
      setLogin(copy);
      return copy;
    });
  };

  // useEffect(() => {
  //   console.log("STATE", login);
  // }, [login]);

  //   useEffect(() => {
  //     console.log("PASSWORD", password);
  //   }, [password]);

  return (
    <div className="login">
      <Box sx={{ width: "40%" }}>
        <TextField
          onChange={handleChange}
          type="text"
          sx={{ border: "0" }}
          placeholder="Username"
        />
        <TextField
          sx={{ border: "0" }}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setLogin((prevState) => {
              let copy = { ...prevState };
              copy.password = e.target.value;
              setLogin(copy);
              return copy;
            })
          }
        />
        <Button
          sx={{ width: "100%", color: "black", background: "lightgrey" }}
          variant="solid"
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Login
        </Button>
      </Box>
      {/* <form>
        <label forhtml="fname">Username</label>
        <input
          onChange={handleChange}
          type="text"
          id="fname"
          name="fname"
        ></input>
        <label forhtml="lname">Password:</label>
        <input
          onChange={(e) =>
            setLogin((prevState) => {
              let copy = { ...prevState };
              copy.password = e.target.value;
              setLogin(copy);
              return copy;
            })
          }
          type="text"
          id="lname"
          name="lname"
        ></input>
        <br></br>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        ></input>
      </form> */}
    </div>
  );
}
