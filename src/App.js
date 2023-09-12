// import "./App.css";
import './global-styles/global.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/projects'
import Contact from './components/Contact/Contact';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      
      </Router>

    </div>
  );
}



export default App;