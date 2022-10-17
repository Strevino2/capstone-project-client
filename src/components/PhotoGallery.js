import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
    const homeBarWidth = document.getElementsByClassName("home-about-bar").innerWidth;
  return (
    <ImageList
      sx={{ width: homeBarWidth, height: 800, paddingTop: 4, backgroundColor: "#282828" }}
      variant="string"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/26101_113419205349707_649150_n.jpg",
    title: 'building view of Hill Country Cupboard',
    rows: 2,
    cols: 2,
  },
  {
    img: '/143298853_4240189429339310_5668117409480340843_n.jpg',
    title: 'Catfish salad',
  },
  {
    img: '/Mimosa.jpg',
    title: 'Hill Country Cupboard Mimosa',
  },
  {
    img: '/BiscuitsandGravy.jpg',
    title: 'Biscuits and Gravy',
    cols: 2,
  },
  {
    img: '/CatfishSpecialLarge.jpg',
    title: 'Catfish Special',
    cols: 2,
  },
  {
    img: '/297031234_5933796059978630_4496011331339506165_n.jpg',
    title: 'logo',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '/ChickenandDumplingsSpecial.jpg',
    title: 'Chicken and Dumplings',
  },
  {
    img: '/ChickenFriedSteak.jpg',
    title: 'Chicken fried steak special',
  },
  {
    img: '/ChickenSpaghettiSpecial.jpg',
    title: 'Chicken Spaghetti Special',
    rows: 2,
    cols: 2,
  },
  {
    img: '/ChickenTortillaSoup.jpg',
    title: 'Chicken Tortilla Soup',
  },
  {
    img: '/CrispyTacos.jpg',
    title: 'Crispy Taco Plate Special',
  },
  {
    img: '/DessertDisplay.jpg',
    title: 'Dessert sign inside Hill Country Cupboard',
    cols: 2,
  },
];