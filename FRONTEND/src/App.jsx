import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Curriculum from './Pages/Curriculum';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';
import Classes from './Pages/Classes';
import Results from './Pages/Results';
import Topbar from './Components/Topbar';

function App() {
  return (
    <>

      <Router className="flex">
        
        <div className='flex h-full bg-gradient-to-b from-purple-100 via-orange-50 to-transparent'>
        <div className="fixed top-0 left-0 w-[1325px] h-full">
          <Sidebar />
        </div>
        <div className='flex-1 ml-[200px]'>

            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
