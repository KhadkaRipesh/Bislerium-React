import { useState } from 'react';
import styles from './AccountSetting.module.css';
import { Button, Popconfirm } from 'antd';
function AccountSetting() {
  const [profileData, setProfileData] = useState({
    full_name: '',
    email: '',
    phone: '',
  });

  const handleChangeProfile = (event, field) => {
    setProfileData({ ...profileData, [field]: event.target.value });
  };
  const handleUpdate = () => {};

  //   Delete account on confirm
  function confirm(id) {
    console.log(id);
  }
  return (
    <>
      <div className={styles.account_settings}>
        <div className={styles.details}>
          <img
            className={styles.avatar}
            src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg'
            alt=''
            height={200}
            width={200}
          />
          <h3 className={styles.userName}>Ripesh Khadka</h3>
          <p className={styles.email}>user@example.com</p>
          <Popconfirm
            title='Delete Account'
            description='Are you sure to delete this account?'
            onConfirm={() => confirm('idhere')}
            okText='Yes'
            cancelText='No'
          >
            <Button danger>Delete Account</Button>
          </Popconfirm>
        </div>
        <div className={styles.account_settings_form}>
          <h2 className={styles.account_settings_h2}>Update your Profile</h2>
          <label>
            Full Name <span>*</span>
          </label>
          <br />
          <input
            type='text'
            name='full_name'
            id='full_name'
            placeholder='John Doe'
            value={profileData.full_name}
            onChange={(e) => handleChangeProfile(e, 'full_name')}
            required
          />
          <br />

          <label>
            Email <span>*</span>
          </label>
          <br />
          <input
            type='text'
            name='email'
            id='email'
            placeholder='user@example.com'
            value={profileData.email}
            onChange={(e) => handleChangeProfile(e, 'email')}
            required
          />
          <br />

          <label>
            Contact / Phone <span>*</span>
          </label>
          <br />
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='+977 9800000000'
            value={profileData.phone}
            onChange={(e) => handleChangeProfile(e, 'phone')}
            required
          />
          <br />

          <button className={styles.change} onClick={handleUpdate}>
            Save
          </button>
          <br />
        </div>
      </div>
    </>
  );
}

export default AccountSetting;
