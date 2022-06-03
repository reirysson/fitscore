import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Speak from './components/pages/Speak'
import About from './components/pages/About'
import Suggestions from './components/pages/Suggestions'
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
          <Route path="/about" element={<About />}></Route>
          <Route path="/suggestions" element={<Suggestions />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
