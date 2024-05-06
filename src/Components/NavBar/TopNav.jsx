import { useEffect, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import avatar from '../../assets/avatar.png';
import styles from './TopNav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Notification from '../Notifications/Notification';

function DropdownItems(props) {
  return (
    <li className={styles.li_items} onClick={props.onClick}>
      <div className='icon'>{props.icon}</div>
      <div className='text'>{props.text}</div>
    </li>
  );
}

function TopNav() {
  const navigateTo = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const [open, setOpen] = useState(false);
  const [, setUserName] = useState('');
  useEffect(() => {
    const data = localStorage.getItem('userName');
    setUserName(data);
  }, []);
  function logout() {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('loggedIn');
    navigateTo('/signIn');
    window.location.reload();
  }
  return (
    <>
      <div className={styles.top_container}>
        <div className={styles.title}>
          <h2>
            <span className={styles.view}>Bislerium</span>
          </h2>
        </div>
        <div className={styles.others}>
          <div
            className={styles.notification}
            onClick={() => {
              setShowNotification(!showNotification);
            }}
          >
            <div className={styles.icon}>{<IoMdNotificationsOutline />}</div>
            {showNotification && (
              <div className={styles.notification_dropdown}>
                <Notification />
              </div>
            )}
          </div>
          <div className={styles.profile}>
            <div
              className={styles.icon}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={avatar} alt='img' style={{ height: 35, width: 35 }} />
              <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <div className={styles.personal}>
                  <div className='pp'>
                    <img
                      src={avatar}
                      alt=''
                      style={{ height: 55, width: 55 }}
                    />
                  </div>
                  {/* <div className="pn">{userName}</div> */}
                  <div className='pn'>Admin</div>
                </div>

                <ul>
                  <div className={styles.line}></div>
                  <NavLink to='/profile/account'>
                    <DropdownItems
                      icon={<CgProfile className={styles.dropdown_icon} />}
                      text='My Profile'
                      onClick={() => null}
                    />
                  </NavLink>
                  <NavLink to='/signIn'>
                    <DropdownItems
                      onClick={logout}
                      icon={<FiLogOut />}
                      text='Logout'
                    />
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
