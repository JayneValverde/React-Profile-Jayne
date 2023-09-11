// import "./App.css";
import './global-styles/global.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects'


// function App() {
//   return (
//   <div className='App'>
//     <Homepage />
  
//   </div>
//   )
// }

// function App() {
//     const [currentTab, setCurentTab] = useState("homepage");

//     const renderTab = () => {
//       switch (currentTab) {
        
//         case 'homepage':
//           return <Homepage/>;

//         case "portfolio":
//           return <Projects/>

//         default: 
//         return null;
        
//     }
//   };

//   return (
//     <div>
//       <div className="mobile-header">
//         <Header currentTab={currentTab} setCurrentTab={setCurentTab}></Header> 
//       </div>
//       <div>
//         <main>{renderTab()}</main>
//       </div>
//     </div>
//   );
// }

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