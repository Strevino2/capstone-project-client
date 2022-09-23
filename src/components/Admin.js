import * as React from "react";
import Search from "./Search"
// import ConfirmModal from "./ConfirmModal"
import { useState, useEffect } from "react";
// import Results from "./Results"

export default function Admin() {
  const [menu, setMenu] = useState([]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await fetch(
        "https://capstone-project-gilt-three.vercel.app/menu"
      );

      const json = await data.json();

      setMenu(json);
    };

    fetchMenuData();
  }, []);

    useEffect(() => {
    console.log("MENU", menu);
  }, [menu]);

  useEffect(() => {
    const fetchHoursData = async () => {
      const data = await fetch(
        "https://capstone-project-gilt-three.vercel.app/hoursOfOperation"
      );

      const json = await data.json();

      setHours(json);
    };

    fetchHoursData();
  }, []);

    useEffect(() => {
    console.log("HOURS", hours);
  }, [hours]);

  return (
    <div className="admin">
      <Search menu={menu}/>
      {/* <ConfirmModal /> */}
      {/* <Results /> */}
    </div>
  );
}
