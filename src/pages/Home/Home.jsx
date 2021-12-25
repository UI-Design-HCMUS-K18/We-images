import React from 'react';
import Banner from './Banner';
import Collection from './Collection'
import TopArtist from './TopArtist';
import Topic from './Topic';

function Home() {
  return (
    <div>
      <Banner />
      <Collection />
      <TopArtist />
      <Topic />
    </div>
  );
}

export default Home;
