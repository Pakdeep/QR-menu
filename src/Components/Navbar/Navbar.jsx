import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.heading}>This is hotel name</div>
      <div className={styles.navbar}>
        <div>Non-Veg</div>
        <div>Veg</div>
        <div>Snacks</div>
        <div>Beverage</div>
        <div>Deserts</div>
        <div>Fried</div>
        <div>Cold Drinks</div>
      </div>
    </div>
  );
};

export default Navbar;
