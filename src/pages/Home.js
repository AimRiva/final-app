import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Movies from '../components/Movies';
import Footer from '../components/Footer';

const Home = () => {
  return(
    <div className="">
      <Navigation />
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}

export default Home;
