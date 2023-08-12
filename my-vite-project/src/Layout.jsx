import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header'; // Make sure to provide the correct path to your Header component
import { UserContext } from './UserContext'; // Import your UserContext

export default function Layout() {
  const { user } = useContext(UserContext);

  return (
    <div>
    
      {/* Rest of your layout */}
      <div className="p-4">
        <Header /> {/* Pass the user to the Header component */}
        <Outlet />
      </div>
    </div>
  );
}
