import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function GlobalNav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/TopicsPage">Topics</Link>
        <Link to='/jobs'>Jobs</Link>
    </nav>
  );
}

export default GlobalNav;
