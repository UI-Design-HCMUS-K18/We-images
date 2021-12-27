import React from 'react';
import Banner from './Banner';
import Collection from './Collection'
import TopArtist from './TopArtist';
import Feature from './Feature'
import Topic from './Topic';
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Banner />
      <Collection />
      <TopArtist />
      <Feature />
      <Topic />
      <Footer />
    </div>
  );
}

export default Home;
