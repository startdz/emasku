import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/containers/Pages/Home';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path='blogs' element={<Blogs />} /> */}
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path='*' element={<NoPage />} /> */}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
