import React from 'react';
import Banner from './Banner';
import Collection from './Collection'
import TopArtist from './TopArtist';
import Feature from './Feature'
import Topic from './Topic';

function Home() {
  return (
    <div>
      <Banner />
      <Collection />
      <TopArtist />
      <Feature />
      <Topic />
    </div>
  );
}

export default Home;
