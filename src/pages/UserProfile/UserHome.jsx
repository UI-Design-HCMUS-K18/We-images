import React, { useEffect} from 'react';
import UserBackground from './UserBackground';
import UserInfor from './UserInfor';
import RecentUploads from './RecentlyUpload';
import Tabs from './tabs';
import Footer from '../../components/Footer/Footer';

function UserHome() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
