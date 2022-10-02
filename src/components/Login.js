import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import cookie from "cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = () => {
    console.log("CLICKED");
    fetch("https://capstone-project-gilt-three.vercel.app/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        // Authorization: "Bearer Token",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("TYPE OF", typeof(response))
        console.log("LOGIN RESPONSE", response);
        console.log("TOKEN RESPONSE", response.token);
        console.log("RESPONSE MSG", response.msg)
        if(response.msg === "Login successful") {
        document.cookie = cookie.serialize(
          "loggedIn",
          "true",
          "jwtToken",
          response.token,
          { maxAge: 7200 }
        )}
          navigate("/admin")
      });
  };

  let cookies = cookie.parse(document.cookie);

  useEffect(() => {
    console.log("LOGIN PAGE")
    cookies["loggedIn"] && navigate("/admin");
  });

  const handleChange = (e) => {
    setLogin((prevState) => {
      let copy = { ...prevState };
      copy.username = e.target.value;
      setLogin(copy);
      return copy;
    });
  };

  return (
    <div className="login">
      <Box sx={{ width: "40%" }}>
        <TextField
          onChange={handleChange}
          type="text"
          variant="standard"
          sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
          placeholder="Username"
        />
        <TextField
          sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
          type="password"
          variant="standard"
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
        <br></br>
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
    </div>
  );
}
