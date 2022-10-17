import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import cookie from "cookie";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(false);
  
  let navigate = useNavigate();
  let cookies = cookie.parse(document.cookie);

  const handleSubmit = () => {
    try {
      fetch("https://capstone-project-gilt-three.vercel.app/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.msg === "Login successful") {
            document.cookie = cookie.serialize("loggedIn", "true", {
              maxAge: 7200,
            });
            document.cookie = cookie.serialize("username", login.username, {
              maxAge: 7200,
            });
            document.cookie = cookie.serialize("token", response.token, {
              maxAge: 7200,
            });
            setErrorMessage(false);
            window.location.reload();
            navigate("/admin");
          } else {
            setErrorMessage(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cookies["loggedIn"] && navigate("/admin");
  });

  useEffect(() => {
    console.log("ERROR MESSAGE", errorMessage);
  }, [errorMessage]);

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
        {errorMessage && (
          <p className="login-error-msg">Wrong username or password</p>
        )}
      </Box>
    </div>
  );
}
