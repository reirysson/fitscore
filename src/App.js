import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'

import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'


function App() {
  return (
    <Router>
      <NavBar />
      <Container>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
      </Container>
      <p>FitScore</p>
    </Router>
  );
}

export default App;
