import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout2 from './pages/Layout2';
import Home from "./pages/Home";
import About from "./pages/About";
import Weather from "./pages/Weather";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footers from './pages/Footers';  //
import './index.css';
export default function App() {


  return (

<Container>
  
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Home />}  />
          <Route exec  path="features" element={<Features />}  />
          <Route exec path="about" element={<About />}  />
          <Route exec path="weather" element={<Weather />}  />
          <Route exec path="contact" element={<Contact />}  />
          <Route  path="*" element={<NoPage />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
    <Footers /> 
</Container>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
