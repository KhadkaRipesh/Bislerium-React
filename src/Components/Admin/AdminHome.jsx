import { useState } from 'react';
import styles from './AdminHome.module.css';
import DashboardCard from '../mini-components/Cards/DashboardCard';
import { BiNews } from 'react-icons/bi';
function AdminHome() {
  const [userName] = useState('Admin');
  return (
    <>
      <p className={styles.head}>
        Welcome <strong>{userName}</strong>, what would you like to do today?
      </p>
      <hr className={styles.footer} />
      <br />
      <div className={styles.cards}>
        <DashboardCard
          to=''
          icon={<BiNews />}
          title='Add Post or Announcement'
          subtitle=" to add or post the latest news and updates for your student's newsfeed! Alert students with events and announcement."
          color='#F0F7F6'
        />
      </div>
    </>
  );
}

export default AdminHome;
