import React, { useState } from "react";
import "./brandslider.css";

const brandslider = () => {
  
  return(  

    <div class="container-fluid">
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <div class="carousel carousel-showmanymoveone slide" id="itemslider">
      <div class="carousel-inner"></div>
    
    <div className="brands-wrap">
        <div className="brand-carousel" id="brandCarousel">
          <div className="gallery-cell"><img src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" /></div>
          <div className="gallery-cell"><img src="https://avatars3.githubusercontent.com/u/22247014?s=400&v=4" /></div>
          <div className="gallery-cell"><img src="https://worldvectorlogo.com/logos/sass-1.svg" /></div>
          <div className="gallery-cell"><img src="http://maffrigby.com/wp-content/uploads/2014/07/angularjs-logo-trans.png" /></div>
        </div>
      </div>
      </div></div></div></div>
    )
  }
  export default brandslider ;