import * as React from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="image-container">
        <h2 className="menu-h2">Our Menu</h2>
        <p className="menu-h2-message">
          Call us or ask your server about our daily specials!
        </p>
        <div className="menu-cards">
          <MenuCard
            menuType="Appetizers"
            menuMessage="All Hand-breaded Appetizers are made fresh to order(never frozen), and served with our Homemade Buttermilk Ranch Dressing."
          />
          <MenuCard
            menuType="From the Grill"
            menuMessage="Plates from this selection are served with a choice of two sides."
          />
          <MenuCard
            menuType="Cupboard Burgers"
            menuMessage="See server or online ordering for toppings your way."
          />
          <MenuCard
            menuType="Hill Country Baskets"
            menuMessage="Served with French Fries."
          />
          <MenuCard
            menuType="Cupboard Sandwiches"
            menuMessage="All Sandwiches are served with one side."
          />
          <MenuCard
            menuType="Hill Country Salads"
            menuMessage="Served with the dressing of your choice."
          />
          <MenuCard
            menuType="Hungry Man Breakfast"
            menuMessage="Breakfast served all day!"
          />
          <MenuCard
            menuType="Quick Breakfast"
            menuMessage="Breakfast served all day!"
          />
          <MenuCard
            menuType="Pancakes and Biscuits"
            menuMessage="All pancakes and biscuits are baked fresh daily!"
          />
          <MenuCard
            menuType="Texican Style Breakfast"
            menuMessage="Plates from this selection are served with Country Fried Potatoes and Refried Beans, Corn or Flour tortilla."
          />
          <MenuCard menuType="Drinks from the Cupboard" />
          <MenuCard menuType="A 'La Carte" />
          <MenuCard menuType="Veggies On The Side" />
          {/* <MenuCard menuType="Specials"/> */}
        </div>
        <p className="bottom-menu-message">
          Parties of 5 or more 15% Gratuity. Consuming raw or undercooked meat,
          poultry, seafood, shellfish, or eggs may increase your risk of
          foodborne illness.
        </p>
      </div>
    </div>
  );
}
