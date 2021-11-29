import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import avatar from '../assets/avatar.png';

const About = () => {
  return(
    <>
      <Navigation />

      <header >
      {/* <img className="" src={background} alt="..." /> */}
            <div className="text-center my-5">
                <img className="img-fluid rounded-circle mb-4" src={avatar} alt="" />
            </div>
        </header>
        {/* <!-- Content section--> */}
        <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>Introduction</h2>
                        <p className="lead">Perkenalkan nama saya Efraim Dahlan, saya mahasiswa dari Universitas Klabat Airmadidi. App yang saya buat adalah tentang aplikasi pencari Manga dari Website MAL menggunakan 2 jenis API yaitu dari Official MyAnimeList dan dari Jikan (Unofficial MyAnimeList API)</p>
                        <div className="container border border-2">
                        <p className="mb-0">Full Name                 : Dahlan, Efraim Ariel Riva</p>
                        <p className="mb-0">Registration Number/ NIM  : S21910044 / 105011910010</p>
                        <p className="mb-0">Faculty                   : Fakultas Ilmu Komputer</p>
                        <p className="mb-0">Program Study             : Sistem Informasi</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <Footer />
    </>
  );
}

export default About;
