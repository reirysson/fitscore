import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import Speak from './components/pages/Speak'
import Company from './components/pages/Company'
import About from './components/pages/About'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/speak" element={<Speak />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
