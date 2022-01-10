import React from 'react';
import UserBackground from './UserBackground';
import UserInfor from './UserInfor';
import RecentUploads from './RecentlyUpload';
import Tabs from './tabs';
import Footer from '../../components/Footer/Footer';

function UserHome() {
  return (
    <div>
      <UserBackground />
      <UserInfor />
      <Tabs></Tabs>
      <RecentUploads />
      <Footer />
    </div>
  );
}

export default UserHome;
