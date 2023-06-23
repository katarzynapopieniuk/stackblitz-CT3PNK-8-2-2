import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Operation from './Operation';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/:operation" element={<Operation />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

