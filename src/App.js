// import "./App.css";
import './global-styles/global.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/projects'




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      
      </Router>

    </div>
  );
}



export default App;