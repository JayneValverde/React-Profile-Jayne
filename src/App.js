import "./App.css";
import './global-styles/global.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer'




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}



export default App;