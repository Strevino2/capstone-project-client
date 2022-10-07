import * as React from "react";
import EditMenuForm from "./EditMenuForm";
import { useState, useEffect } from "react";
import { AddMenuForm } from "./AddMenuForm";
import { DeleteMenuForm } from "./DeleteMenuForm";
import cookie from "cookie";
// import SnackBar from "./SnackBar";

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
    // console.log("MENU", menu);
    cookie.parse(document.cookie);
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
    // console.log("HOURS", hours);
  }, [hours]);

  return (
    <div>
      <div className="admin">
        <EditMenuForm menu={menu} />
        <AddMenuForm menu={menu} />
        <DeleteMenuForm menu={menu} />
      </div>
    </div>
  );
}
