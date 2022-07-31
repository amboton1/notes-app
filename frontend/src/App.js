import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoteDetails from './pages/NoteDetails';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/note-details/:id" element={<NoteDetails />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
