import React from 'react';
import mal from '../assets/header.png'

const Header = () => {
  return(
    <header className="bg-info py-5 bg-dark">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <img src={mal} alt="header" width="270" height="50" />
          <p className="lead fw-normal text-white-50 mb-0">Manga API from MyAnimeList</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
