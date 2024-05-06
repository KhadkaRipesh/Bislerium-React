import { useParams } from 'react-router-dom';
import ProfileSideBar from './ProfileSidebar';
import AccountSetting from './AccountSetting.jsx';
import styles from './Profile.module.css';
import ChangePassword from './ChangePassword';
import TopNav from '../../Components/NavBar/TopNav.jsx';
import Nav from '../../Components/NavBar/Nav.jsx';

function UserProfile() {
  const { activePage } = useParams();
  return (
    <>
      <div className='App'>
        <div className='left'>
          <Nav />
        </div>
        <div className='right'>
          <TopNav />
          <div className={styles.userProfile}>
            <div className={styles.left}>
              <ProfileSideBar activePage={activePage} />
            </div>
            <div className={styles.right}>
              {activePage === 'account' && <AccountSetting />}
              {activePage === 'change-password' && <ChangePassword />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
