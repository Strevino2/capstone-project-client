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

  const handleChange = (e) => {
    console.log("CHANGE", e.target.value);
    setInput(e.target.value.toLowerCase());
  };

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

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];

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
