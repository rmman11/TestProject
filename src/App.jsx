import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from './pages/Layout2';
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Footers from './pages/Footers';  //
import './index.css';

function App() {


  return (
<Container>
    
      <BrowserRouter>
      <Router>
      <Layout>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/features" render={() => <Features />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route path="*" element={<NoPage />} />
        </Layout>
    </Router>

    </BrowserRouter>
    <Footers />
    </Container>

  )
}

export default App
