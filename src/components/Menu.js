import * as React from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="image-container">
        <h2 className="menu-h2">Our Menu</h2>
        
        <MenuCard menuType="Appetizers" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Veggies On The Side" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="From the Grill" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Hill Country Baskets" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="BreakFast" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Beverages" menuMessage="All our appetizers are hand-breaded" />
        {/* <MenuCard menuType="Specials"/> */}
      </div>
    </div>
  );
}
