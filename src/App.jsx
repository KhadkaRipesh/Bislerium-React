import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRoute from './Components/AdminRoute';
import AdminHome from './Components/Admin/AdminHome';
import UserProfile from './Pages/Profile/Profile';
import AdminList from './Components/Admin/AdminList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminRoute />}>
          <Route path='' element={<AdminHome />} />
          <Route path='admin' element={<AdminList />} />
        </Route>
        <Route path='/profile/:activePage' element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
