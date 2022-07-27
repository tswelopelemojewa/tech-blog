import React from 'react';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogDetails';
import NotFound from './404';


function App() {
  return (
    <Router>
      <div className="App"> 
      {/* parent div: what the component returns, 
      must be placed inside one element*/}
        
        <Navbar />
        {/* navbar component */}
        
        <div className='content'>
          <Routes>
            <Route  path="/"  element={<Home />} />

            <Route path="/create" element={<Create />} />

            <Route path="/blog/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />
          
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
