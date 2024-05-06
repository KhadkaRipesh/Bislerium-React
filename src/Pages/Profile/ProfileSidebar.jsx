import { Link } from 'react-router-dom';
import styles from './ProfileSidebar.module.css';
import { FaRegAddressCard } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
function ProfileSideBar(props) {
  return (
    <>
      <div className={styles.usersidebar}>
        {props.activePage === 'account' ? (
          <div className={styles.s2}>
            <FaRegAddressCard />
            <span>Account Settings</span>
          </div>
        ) : (
          <Link to='/profile/account' className='stylesnone'>
            <div className={styles.s1}>
              <FaRegAddressCard />
              <span>Account Settings</span>
            </div>
          </Link>
        )}

        {/* for change password */}
        {props.activePage === 'change-password' ? (
          <div className={styles.s2}>
            <RiLockPasswordLine />
            <span>Change Password</span>
          </div>
        ) : (
          <Link to='/profile/change-password' className='stylesnone'>
            <div className={styles.s1}>
              <RiLockPasswordLine />
              <span>Change Password</span>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}

export default ProfileSideBar;
