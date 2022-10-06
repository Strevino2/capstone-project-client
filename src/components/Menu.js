import * as React from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="image-container">
        <h2 className="menu-h2">Our Menu</h2>
        <div className="menu-cards">
        <MenuCard menuType="Appetizers" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="From the Grill" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Cupboard Burgers" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Hill Country Baskets" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Cupboard Sandwiches" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Hill Country Salads" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Hungry Man Breakfast" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Quick Breakfast" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Pancakes and Biscuits" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Texican Style Breakfast" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Drinks from the Cupboard" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="A 'La Carte" menuMessage="All our appetizers are hand-breaded" />
        <MenuCard menuType="Veggies On The Side" menuMessage="All our appetizers are hand-breaded" />
        {/* <MenuCard menuType="Specials"/> */}
        </div>
      </div>
    </div>
  );
}
