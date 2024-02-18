import Menu from "./Components/Menu"
import Navbar from "./Components/Navbar/Navbar"
// import Login from "./Page/Login"
import styles from "./app.module.css"
import "./global.css"
function App() {

  return (
    <div className={styles.app}>
      {/* <Login /> */}
      <Navbar />
      <Menu />
    </div>
  )
}

export default App
