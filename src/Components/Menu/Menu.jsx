/* eslint-disable no-unused-vars */
import styles from "./menu.module.css";
import biryani from "./Assets/items/biryani.jpeg";
import fishBiryani from "./Assets/items/fishBiryani.jpeg";
import chicken from "./Assets/items/chicken.webp";
import mutton from "./Assets/items/mutton.jpeg";
import vegBiryani from "./Assets/items/vegBiryani.jpeg";
import Button from "@mui/material/Button";
import { useState } from "react";
const Menu = () => {
  const [order, setOrder] = useState([]);
  const menuItems = [
    {
      id: 1,
      itemName: "Fish Biryani",
      price: "140",
      src: biryani,
      category: "nonVeg",
      count: 0,
    },
    {
      id: 2,
      itemName: "Chicken Biryani",
      price: "130",
      src: chicken,
      category: "nonVeg",
      count: 0,
    },
    {
      id: 3,
      itemName: "Mutton Biryani",
      price: "150",
      src: mutton,
      category: "nonVeg",
      count: 0,
    },
    {
      id: 4,
      itemName: "Veg Biryani",
      price: "110",
      src: vegBiryani,
      category: "veg",
      count: 0,
    },
    {
      id: 5,
      itemName: "Biryani",
      price: "120",
      src: fishBiryani,
      category: "veg",
      count: 0,
    },
    {
      id: 4,
      itemName: "Veg Biryani",
      price: "110",
      src: vegBiryani,
      category: "veg",
      count: 0,
    },
    {
      id: 5,
      itemName: "Biryani",
      price: "120",
      src: fishBiryani,
      category: "veg",
      count: 0,
    },
  ];
  return (
    <div className={styles.menuWrapper}>
      <h1>Menu</h1>
      {menuItems.map((item, index) => {
        return (
          <div className={styles.menu} key={index}>
            <div className={styles.left}>
              <img src={item.src} alt="food" />
              <div className={styles.desc}>
                <div>{item.itemName}</div>
                <div className={styles.price}>&#8377; {item.price}</div>
              </div>
            </div>
            <div className={styles.right}>
              <button disabled={item.count == 0} onClick={() => {}}>
                -
              </button>
              <div className={styles.count}>{item.count}</div>
              <button onClick={() => {}}>+</button>
            </div>
          </div>
        );
      })}
      <div className={styles.bottom}>
        <div>
          <span>Total</span> items <span>bought</span> {order.length}
        </div>
        <div className={styles.right}>
          <span>Total price</span> &#8377; XXX
          <Button variant="outlined">Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
