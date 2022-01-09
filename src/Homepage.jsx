import React from "react";
import Footer from './Component/Footer';
import Header from './Component/Header';
import FrontPage from './FrontPage';


const Homepage = () => {
    return (
<div className="page-container">
        <div className="content-wrap">
          <Header />
          <FrontPage />
          <Footer />
        </div>
      </div>
    )
}

export default Homepage;