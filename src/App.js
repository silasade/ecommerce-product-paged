import React from 'react';
import { Route,Routes } from "react-router-dom";
import About from "./components/About";
import Men from "./components/Men";
import Women from "./components/Women";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Nomatch from "./components/Nomatch";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/esm/Spinner';
import { ContextProvider,Context } from './components/context';
import { useContext } from 'react';

const Lazyabout= React.lazy(()=>import ('./components/Collections'))
function App() {
  localStorage.clear();
  return (
    
    <ContextProvider>
      
      <Navbar/>
    
    <Routes>
        <Route path="/ecommerce-product-paged" element={
            <React.Suspense fallback={<Spinner/>}>
                <Lazyabout/>
            </React.Suspense>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<Nomatch/>}/>

    </Routes>
    
    </ContextProvider>
  );
}

export default App;
