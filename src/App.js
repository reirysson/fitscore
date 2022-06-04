import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Speak from './components/pages/Speak'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <NavBar />
      <div className={styles.app_container}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/speak" element={<Speak />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
