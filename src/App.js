import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from './component/Create'
import Read from './component/Read';
import Update from './component/Update';

const App = () => {
  return (  
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
