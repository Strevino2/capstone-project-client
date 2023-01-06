import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Menu() {
  return (
    <div
      alt="Background image of Eggs, Sausage, and Potatoes"
      className="menu-container"
    >
      <div className="image-container">
        <h2 className="menu-h2">Our Menu</h2>
        <p className="menu-h2-message">
          Call us or ask your server about our daily specials!
        </p>
        <div className="menu-cards">
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Appetizers"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {
                  "All Hand-breaded Appetizers are made fresh to order(never frozen), and served with our Homemade Buttermilk Ranch Dressing."
                }
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"FRIED ONION RINGS"}</p>
                        <p style={{ color: "maroon" }}>{"$7.29"}</p>
                      </div>
                      {/* <p className="menu-description">{x.menu_description}</p> */}
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"FRIED MUSHROOMS"}</p>
                        <p style={{ color: "maroon" }}>{"$10.99"}</p>
                      </div>
                      {/* <p className="menu-description">{x.menu_description}</p> */}
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"FRIED GREEN TOMATOES"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$11.99"}</p>
                      </div>
                      {/* <p className="menu-description">{x.menu_description}</p> */}
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"FRIED ZUCCHINI & YELLOW SQUASH"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$11.99"}</p>
                      </div>
                      {/* <p className="menu-description">{x.menu_description}</p> */}
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"CUPBOARD SAMPLER"}</p>
                        <p style={{ color: "maroon" }}>{"$15.29"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Green Tomatoes, Mushrooms, Onions Rings, Zucchini, Squash"
                        }
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"From The Grill"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {
                  "Plates from this selection are served with a choice of two sides."
                }
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`"WORLD'S BEST" CHICKEN FRIED STEAK (NEARLY 3 DOZEN SOLD)`}</p>
                        <p style={{ color: "maroon" }}>{"$13.99"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Hand-Battered, and smothered in our Country Gravy.  Also available in small and large."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"GRILLED OR CHICKEN FRIED PORK CHOPS"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$14.29"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Two of our AWARD WINNING (Texas Monthly) T-Bone Style Pork Chops, Hand-Battered and Fried to perfection. Country Gravy served on the side."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"COUNTRY FRIED CHICKEN"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$14.29"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Chicken Breast, Hand-Battered and fried until golden brown.  Country Gravy served on the side."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"HAMBURGER STEAK"}</p>
                        <p style={{ color: "maroon" }}>{"$12.89"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "8oz Hamburger Steak smothered with Sauteed Onions and Brown Gravy."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"MUSHROOM SWISS STEAK"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$13.89"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "8oz Hamburger Steak topped with Sauteed Mushrooms, Onions and Swiss."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"SOUTHWEST HAMBURGER STEAK"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$14.99"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "8oz Hamburger Steak topped with Sauteed Mushrooms, Onions, Jalapenos and Mixed Cheddar."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"SOUTHWEST GRILLED CATFISH OR CHICKEN"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$13.99"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Tender Catfish or Chicken Morsels, Grilled Mushrooms, Jalapenos, Onions.  Topped with Mixed Cheddar.  Served over a bed of Seasoned Rice."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"MUSHROOM SWISS CATFISH OR CHICKEN"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$13.49"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Tender Catfish or Chicken Morsels, Grilled Mushrooms, topped with melted Swiss.  Served over a bed of Seasoned Rice."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"TERIYAKI"}</p>
                        <p style={{ color: "maroon" }}>{"$12.99"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Tender Catfish or Chicken Morsels, Grilled Teriyaki Sauce.  Served over a bed of Seasoned Rice."
                        }
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Cupboard Burgers"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {"Flame-Broiled burgers with the toppings your way."}
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`COWBOY BURGER`}</p>
                        <p style={{ color: "maroon" }}>{"$6.99"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "1/3lb Burger Patty, see server or online ordering for customizable toppings.  Also available as a combo with Fries and an Iced Tea or Soda for $10.99."
                        }
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"DOUBLE MEAT BURGER"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$10.99"}</p>
                      </div>
                      <p className="menu-description">
                        {
                          "Two 1/3lb Burger Patties, see server or online ordering for customizable toppings.  Also available as a combo with Fries and an Iced Tea or Soda for $13.99."
                        }
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Hill Country Baskets"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {"Served with French Fries and Gravy or Ranch."}
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`STEAK STRIP BASKET`}</p>
                        <p style={{ color: "maroon" }}>{"$11.29"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`CHICKEN BASKET`}</p>
                        <p style={{ color: "maroon" }}>{"$11.49"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`SMALL CHICKEN BASKET`}</p>
                        <p style={{ color: "maroon" }}>{"$9.29"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"CATFISH BASKET"}</p>
                        <p style={{ color: "maroon" }}>{"$11.89"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"ADD A SIDE FOR"}</p>
                        <p style={{ color: "maroon" }}>{"$2.25"}</p>
                      </div>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Cupboard Sandwiches"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {"All Sandwiches are served with one side."}
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`THE SOUTHERNER`}</p>
                        <p style={{ color: "maroon" }}>{"$11.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`Our Hand-Breaded "World's Best" Chicken Fried Steak.  Served on Texas Toast.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`THE LADY BIRD`}</p>
                        <p style={{ color: "maroon" }}>{"$12.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`Grilled Chicken Breast with Grilled Onions, Mushrooms and Swiss. Served on Texas Toast.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`THE ROOSTER`}</p>
                        <p style={{ color: "maroon" }}>{"$13.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Country Fried Chicken Breast with Grilled Onions, Mushrooms, and Swiss.  Served with our Homemade Buttermilk Ranch Dressing on Texas Toast.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>
                          {"TEXAS GRILLED CHEESE"}
                        </p>
                        <p style={{ color: "maroon" }}>{"$8.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`American, Swiss, and Mixed Cheddar with Grilled Onions, Mushrooms, Tomatoes and Jalapenos.  Served on Texas Toast.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"COUNTRY CLUB"}</p>
                        <p style={{ color: "maroon" }}>{"$11.89"}</p>
                      </div>
                      <p className="menu-description">
                        {`Hot Ham and Bacon, American Cheese, Lettuce and Tomato, served on grilled toast.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"GRILLED CHEESE"}</p>
                        <p style={{ color: "maroon" }}>{"$11.89"}</p>
                      </div>
                      <p className="menu-description">
                        {`American and Swiss Cheese.`}
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Hill Country Salads"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {"Served with the dressing of your choice."}
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`CHICKEN FRIED STEAK SALAD`}</p>
                        <p style={{ color: "maroon" }}>{"$11.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`Our Hand-Breaded "World's Best" Chicken Fried Steak, served on fresh cut Romaine, topped with Tomatoes and Mixed Cheddar.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`COUNTRY FRIED OR GRILLED CHICKEN SALAD`}</p>
                        <p style={{ color: "maroon" }}>{"$13.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Chicken Morsels, served on fresh cut Romaine, topped with Tomatoes and Mixed Cheddar.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`TACO SALAD`}</p>
                        <p style={{ color: "maroon" }}>{"$12.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`Deep-Fried Flour Tortilla shell filled with our Homemade Frijoles, fresh cut Romaine, Tomatoes, Mixed Cheddar and topped with Seasoned Beef.  Get it with Grilled Chicken instead for $13.99`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{"CHEF SALAD"}</p>
                        <p style={{ color: "maroon" }}>{"$13.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Fresh cut Romaine, with Bacon, Ham and Boiled Eggs, topped with Tomatoes, Mixed Cheddar.`}
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Hungry Man Breakfast"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {
                  "All plates below are served with choice of Potato or Grits and one type of bread."
                }
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`CHICKEN FRIED STEAK`}</p>
                        <p style={{ color: "maroon" }}>{"$11.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`Our Hand-Breaded "World's Best" Chicken Fried Steak, served with one egg.  Get two eggs for $13.29`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`COUNTRY FRIED OR GRILLED PORK CHOPS`}</p>
                        <p style={{ color: "maroon" }}>{"$13.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two eggs any style.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`TRIPLE PLAY`}</p>
                        <p style={{ color: "maroon" }}>{"$14.69"}</p>
                      </div>
                      <p className="menu-description">
                        {`Three eggs any style served with Ham, Bacon, and Sausage.`}
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Quick Breakfast"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {"Breakfast served all day!"}
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`QUICK BREAKFAST`}</p>
                        <p style={{ color: "maroon" }}>{"$9.69"}</p>
                      </div>
                      <p className="menu-description">
                        {`Choice of one: Ham, Bacon, and Sausage.  Served with choice of Potato or Grits and one type of bread.  Add an extra egg for $11.99.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`BREAKFAST TACO`}</p>
                        <p style={{ color: "maroon" }}>{"$3.99"}</p>
                      </div>
                      <p className="menu-description">
                        {`One Egg, Potato, and choice of meat (Ham, Bacon, Sausage, or Chorizo).`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`BELT SANDWICH`}</p>
                        <p style={{ color: "maroon" }}>{"$8.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Bacon, Egg, Lettuce, Tomato, and Cheese.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`BUILD YOUR STYLE OMELET`}</p>
                        <p style={{ color: "maroon" }}>{"$9.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Comes with 2 eggs, cheese, and your choice of potato or grits and one type of bread.  Add veggies, an additional egg, or 1-2 meats for an extra charge per request.  See your server or online ordering for details.`}
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Pancakes and Biscuits"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {"All pancakes and biscuits are baked fresh daily!"}
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`ULTIMATE BISCUITS`}</p>
                        <p style={{ color: "maroon" }}>{"$9.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two open-faced biscuits, Mixed with crumbled sausage & scrambled egg and smothered with country gravy.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`BISCUITS 'N SAUSAGE GRAVY`}</p>
                        <p style={{ color: "maroon" }}>{"$7.29"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`BISCUITS 'N GRAVY`}</p>
                        <p style={{ color: "maroon" }}>{"$5.29"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`PICK THREE`}</p>
                        <p style={{ color: "maroon" }}>{"$8.49"}</p>
                      </div>
                      <p className="menu-description">
                        {`Pancake, Egg, Hash browns, Bisquit, Toast, Grits, Country Fried Potatoes (1 of each).`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`PANCAKE`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                      <p className="menu-description">
                        {`Add an additional Pancake, Egg, or Meat for an addtional charge.  See your server or online ordering for details.`}
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Texican Style Breakfast"}
              </h3>
              <p
                className="menu-message"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {
                  "Plates from this selection are served with Country Fried Potatoes and Refried Beans, Corn or Flour tortilla."
                }
              </p>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`MIGAS COMPUESTAS`}</p>
                        <p style={{ color: "maroon" }}>{"$9.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two Eggs scrambled with Corn tortilla chips, Onions, Tomatoes, and Bell pepper.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`HUEVOS RANCHEROS`}</p>
                        <p style={{ color: "maroon" }}>{"$9.69"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two Eggs, any style, served over Corn tortillas, topped with Ranchero Sauce.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`HUEVOS A LA MEXICANA`}</p>
                        <p style={{ color: "maroon" }}>{"$9.69"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two Eggs scrambled with chopped Onions, Tomatoes, and Jalapenos.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`CHULETA CON HUEVOS`}</p>
                        <p style={{ color: "maroon" }}>{"$10.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two eggs, any style, served with a marinated pork chop.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`HUEVOS CON CHORIZO`}</p>
                        <p style={{ color: "maroon" }}>{"$10.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two eggs scrambled with Mexican Sausage, Tomatoes, and Onions.`}
                      </p>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`CHILAQUILES`}</p>
                        <p style={{ color: "maroon" }}>{"$10.29"}</p>
                      </div>
                      <p className="menu-description">
                        {`Two eggs scrambled with Corn tortilla chips and Onions, topped with Swiss cheese.`}
                      </p>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Drinks From The Cupboard"}
              </h3>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`SWEET OR REG TEA (Refills)`}</p>
                        <p style={{ color: "maroon" }}>{"$2.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`COFFEE OR DECAF (Refills)`}</p>
                        <p style={{ color: "maroon" }}>{"$2.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`PEACH TEA (1 Refill)`}</p>
                        <p style={{ color: "maroon" }}>{"$3.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`HOT TEA`}</p>
                        <p style={{ color: "maroon" }}>{"$2.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`SODA POP (No refill, can soda)`}</p>
                        <p style={{ color: "maroon" }}>{"$1.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`LEMONADE (1 Refill)`}</p>
                        <p style={{ color: "maroon" }}>{"$3.49"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`BOTTLED WATED`}</p>
                        <p style={{ color: "maroon" }}>{"$1.75"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`REGULAR MOO`}</p>
                        <p style={{ color: "maroon" }}>{"$3.49"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`CHOCOLOATE MOO`}</p>
                        <p style={{ color: "maroon" }}>{"$3.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`ORANGE JUICE`}</p>
                        <p style={{ color: "maroon" }}>{"$3.49"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`APPLE JUICE`}</p>
                        <p style={{ color: "maroon" }}>{"$3.49"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`CRANBERRY JUICE`}</p>
                        <p style={{ color: "maroon" }}>{"$3.49"}</p>
                      </div>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"A 'La Carte"}
              </h3>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`BISCUITS(2)`}</p>
                        <p style={{ color: "maroon" }}>{"$2.75"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`TOAST(2)`}</p>
                        <p style={{ color: "maroon" }}>{"$1.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`ONE PANCAKE`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`HASH BROWNS`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`COUNTRY FRIED POTATOES`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`GRITS`}</p>
                        <p style={{ color: "maroon" }}>{"$2.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`REFRIED BEANS`}</p>
                        <p style={{ color: "maroon" }}>{"$2.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`SLICED TOMATOES`}</p>
                        <p style={{ color: "maroon" }}>{"$2.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`ONE EGG`}</p>
                        <p style={{ color: "maroon" }}>{"$3.15"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`CREAM GRAVY (4oz)`}</p>
                        <p style={{ color: "maroon" }}>{"$2.75"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`SAUSAGE GRAVY (4oz)`}</p>
                        <p style={{ color: "maroon" }}>{"$4.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`HAM (2 slices)`}</p>
                        <p style={{ color: "maroon" }}>{"$3.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`SAUSAGE (2 patties)`}</p>
                        <p style={{ color: "maroon" }}>{"$3.99"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`BACON (3 slices)`}</p>
                        <p style={{ color: "maroon" }}>{"$4.29"}</p>
                      </div>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
          <ul className="menu-card">
            <Card sx={{ boxShadow: 12 }} className="inner-menu-card">
              <h3 style={{ textAlign: "center" }} className="menu-header">
                {"Veggies On The Side"}
              </h3>
              <CardContent>
                {" "}
                <Typography component={"div"} className="menu-ul">
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                    component={"div"}
                  >
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Frijoles`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Black-Eyed Peas`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Mashed Potatoes`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`French Fries`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`Cole Slaw (Friday Only)`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Green Beans`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Fried Okra`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Seasoned Rice`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p style={{ color: "maroon" }}>{`Side Salad`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                    <li className="menu-li">
                      <div className="menu-span">
                        <p
                          style={{ color: "maroon" }}
                        >{`Texas Toast available upon request`}</p>
                        <p style={{ color: "maroon" }}>{"$3.25"}</p>
                      </div>
                    </li>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </ul>
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
