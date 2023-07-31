
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/NavBar';
import About from './about/About';
import Home from './home/Home';
import Team from './team/Team';
import TeamDetails from './teamdetails/TeamDetails';


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/teamDetails/:id" element={<TeamDetails/>} />
            </Routes>
        </>




    );
};

export default App;