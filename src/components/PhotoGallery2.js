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
    img: "/Adobe_Express_20221001_2213090_1.png",
    title: 'Hill Country Cupboard Logo',
    rows: 2,
    cols: 2,
  },
  {
    img: '/H.C.CLogo2021.jpg',
    title: 'multiple plates of food',
  },
  {
    img: '/PancakeSpecial.jpg',
    title: 'Pancake special',
  },
  {
    img: '/MimosaTop.jpg',
    title: 'top view of HCC mimosa',
    cols: 2,
  },
  {
    img: '/SmotheredSteakSpecial.jpg',
    title: 'Smothered Steak Special',
    cols: 2,
  },
  {
    img: '/MeatloafSpecial.jpg',
    title: 'MeatLoaf special',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '/TurkeySpecial.jpg',
    title: 'Turkey Special',
  },
  {
    img: '/SalisburySteakSpecial.jpg',
    title: 'Salisbury Steak Special togo',
  },
  {
    img: '/LargeChickenFriedChicken.jpg',
    title: 'Chicken fried chicken with mashed potatoes',
    rows: 2,
    cols: 2,
  },
  {
    img: '/TacoSalad.jpg',
    title: 'Beef taco salad special',
  },
  {
    img: '/StrawberryMimosa.jpg',
    title: 'Special Strawberry Mimosa',
  },
  {
    img: 'TogoCFS.jpg',
    title: 'Chicken Fried Steak, Mashed Potatoes, and Green Beans togo',
    cols: 2,
  },
];