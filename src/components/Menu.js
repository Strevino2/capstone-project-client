import * as React from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="image-container">
        <h2 className="menu-h2">Our Menu</h2>
        <MenuCard menuType="Appetizers" />
        <MenuCard menuType="Veggies On The Side" />
        <MenuCard menuType="From the Grill" />
        <MenuCard menuType="Hill Country Baskets" />
        <MenuCard menuType="BreakFast" />
        <MenuCard menuType="Beverages" />
        {/* <MenuCard menuType="Specials"/> */}
      </div>
    </div>
  );
}
