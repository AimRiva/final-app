import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return(

    // <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    //   <div className="container px-4 px-lg-5">
          
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
    //               <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
    //               <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
    //           </ul>
    //       </div>
    //   </div>
    // </nav>

        // <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top text-white" id="mainNav">
        //     <div class="container">
        //         <Link class="navbar-brand" to="#page-top">MyAnimeList</Link>
        //         <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        //             Menu
        //             <i class="fas fa-bars"></i>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarResponsive">
        //             <ul class="navbar-nav ms-auto">
        //                 <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Home</Link></li>
        //                 <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand " to="/">MyAnimeList</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>







  );
}

export default Navigation;
