import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

// importing icons
import { RxDashboard } from 'react-icons/rx';
import { AiOutlineTeam } from 'react-icons/ai';
import { TfiAnnouncement } from 'react-icons/tfi';

const routes = [
  {},
  { path: '/admin', icon: <RxDashboard />, text: 'Dashboard' },
  { path: '/admin/blogs', icon: <TfiAnnouncement />, text: 'Blogs' },
  { path: '/admin/admin', icon: <AiOutlineTeam />, text: 'Admins' },
];
function Nav() {
  return (
    <div className='container'>
      <section className={styles.icon_lists}>
        {routes.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path}
              end={route.path === '/admin'}
              className={({ isActive }) => {
                let str = `${styles.nav}`;
                if (isActive) str += ` ${styles.navActive}`;
                return str;
              }}
            >
              <div className={styles.indi_div}>
                <div className={styles.icon}>{route.icon}</div>
                <div className={styles.text}>{route.text}</div>
              </div>
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}

export default Nav;
