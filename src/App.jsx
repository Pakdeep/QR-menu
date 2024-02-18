import Menu from "./Components/Menu"
import Navbar from "./Components/Navbar/Navbar"
import styles from "./app.module.css"
import "./global.css"

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Menu />
    </div>
  )
}

export default App
