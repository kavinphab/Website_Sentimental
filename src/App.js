import AboutUs from './Components/Home/AboutUs';
import Home from './Components/Home/Home';
import NavBar from './Components/Home/NavBar';
import {Route, Routes} from 'react-router-dom';

function App() {
  return(
    <>
      <NavBar />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App;
