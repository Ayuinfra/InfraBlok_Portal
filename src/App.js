
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/NavBar';

import About from './about/About';
import ContactUs from './address/Address';
import TeamDetails from './teamdetails/TeamDetails';
import Home from './home/Home';


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<ContactUs/>} />
                <Route exact path="/teamDetails" element={<TeamDetails/>}/>
                
            </Routes>
        </>




    );
};

export default App;