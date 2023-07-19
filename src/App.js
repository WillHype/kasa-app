import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './layouts/layout';

// import des pages
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Error from './pages/Error';


function App() {
  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Locations />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Layout>
    </Router>
    </>

  );
}

export default App;
