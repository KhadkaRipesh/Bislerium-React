import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Nav from './NavBar/Nav';
import TopNav from './NavBar/TopNav';

function AdminRoute() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setIsLoggedIn] = useState(true);
  if (loggedIn) {
    return (
      <div className='App'>
        <div className='left'>
          <Nav />
        </div>
        <div className='right'>
          <TopNav />
          <Outlet />
        </div>
      </div>
    );
  } else {
    return <Navigate to={'/login'} />;
  }
}

export default AdminRoute;
