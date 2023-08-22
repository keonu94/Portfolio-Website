// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import GlobalNav from './components/GlobalNav';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import JobsPage from './pages/JobsPage';
import AddJobTable from './pages/AddJobTable';
import EditJobTable from './pages/EditJobTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [job, setJob] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <img src="./android-chrome-192x192.png" alt="Joshua White"></img>
            <h1>Joshua White</h1>
            <p>Portfolio Website</p>
          </header>

          <GlobalNav />

          <main>
            <section>
                <Routes> 
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/TopicsPage" element={<TopicsPage />} />
                    <Route path="/jobs" element={<JobsPage setJob={setJob}/>} />
                    <Route path="/create" element={<AddJobTable />} /> 
                    <Route path="/update" element={<EditJobTable jobToEdit={job} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023, Joshua White</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;