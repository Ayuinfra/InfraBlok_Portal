
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/NavBar';

import About from './about/About';
import ContactUs from './address/Address';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" component={Navbar} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={ContactUs} />
            </Routes>
        </>




    );
};

export default App;