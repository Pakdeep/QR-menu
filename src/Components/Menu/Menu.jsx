/* eslint-disable no-unused-vars */
import styles from "./menu.module.css";
import biryani from "./Assets/items/biryani.jpeg";
import fishBiryani from "./Assets/items/fishBiryani.jpeg";
import chicken from "./Assets/items/chicken.webp";
import mutton from "./Assets/items/mutton.jpeg";
import vegBiryani from "./Assets/items/vegBiryani.jpeg";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
const Menu = () => {
  // State to store the quantity of each item
  const [itemQuantities, setItemQuantities] = useState({});
  const [items, setItems] = useState({});

  // Function to handle increasing quantity
  const increaseQuantity = (itemId, item) => {
    const newQuantities = { ...itemQuantities };
    const newItems = { ...items };
    if (newItems.hasOwnProperty(itemId)) {
      newItems[itemId].count = (newItems[itemId].count || 0) + 1;
    } else {
      newItems[itemId] = { ...item, count: 1 };
    }
    newQuantities[itemId] = (newQuantities[itemId] || 0) + 1;
    calculateTotalCount(newQuantities);
    setItemQuantities(newQuantities);
    setItems(newItems);
  };
  console.log(items);
  // Function to handle decreasing quantity
  const decreaseQuantity = (itemId, item) => {
    const newQuantities = { ...itemQuantities };
    if (newQuantities[itemId] && newQuantities[itemId] > 0) {
      newQuantities[itemId] -= 1;
      calculateTotalCount(newQuantities);
      setItemQuantities(newQuantities);
    }
  };

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
      id: 6,
      itemName: "Veg Biryani",
      price: "110",
      src: vegBiryani,
      category: "veg",
      count: 0,
    },
    {
      id: 7,
      itemName: "Biryani",
      price: "120",
      src: fishBiryani,
      category: "veg",
      count: 0,
    },
  ];
  const [totalCount, setTotalCount] = useState(0);
  const calculateTotalCount = (items) => {
    let sum = 0;
    Object.keys(items).forEach((item, index) => {
      sum = sum + items[item];
    });
    setTotalCount(sum);
  };
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
              <button
                disabled={item.id == 0}
                onClick={() => {
                  decreaseQuantity(item.id, item);
                }}
              >
                -
              </button>
              <div className={styles.count}>{itemQuantities[item.id] || 0}</div>
              <button
                onClick={() => {
                  increaseQuantity(item.id, item);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className={styles.bottom}>
        <div>
          <span>Total</span> items <span>bought</span> {totalCount}
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
