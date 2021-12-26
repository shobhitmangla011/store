import React, { useState } from "react";
import "./Productslider.css";

const Productslider = () => {
  
  return(
    
<div class="container-fluid">
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <div class="carousel carousel-showmanymoveone slide" id="itemslider">
      <div class="carousel-inner">

        <div class="item active">
          <div class="col-lg-1" fluid>
            <a href="#"><img src="https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80" class="img-responsive center-block" /></a>
            <h4 class="text-center">MAYORAL SUKNJA</h4>
            <h5 class="text-center">200,00 TK</h5>
          </div>
        </div>

        <div class="item">
          <div class="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60" class="img-responsive center-block" /></a>
            <h4 class="text-center">MAYORAL KOŠULJA</h4>
            <h5 class="text-center">800 TK</h5>
          </div>
        </div>

        <div class="item">
          <div class="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60" class="img-responsive center-block" /></a>
            <span class="badge">10%</span>
            <h4 class="text-center">PANTALONE TERI 2</h4>
            <h5 class="text-center">4000,00 TK</h5>
            <h6 class="text-center">5000,00 TK</h6>
          </div>
        </div>

        <div class="item">
          <div class="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="https://images.unsplash.com/photo-1531925470851-1b5896b67dcd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91fe0ca1b5d72338a8aac04935b52148&auto=format&fit=crop&w=500&q=60" class="img-responsive center-block" /></a>
            <h4 class="text-center">CVETNA HALJINA</h4>
            <h5 class="text-center">4000,00 RSD</h5>
          </div>
        </div>

        <div class="item">
          <div class="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60" class="img-responsive center-block" /></a>
            <h4 class="text-center">MAJICA FOTO</h4>
            <h5 class="text-center">40,00 TK</h5>
          </div>
        </div>

        <div class="item">
          <div class="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="https://images.unsplash.com/photo-1532086853747-99450c17fa2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61a42a11f627b0d21d0df757d9b8fe23&auto=format&fit=crop&w=500&q=60" class="img-responsive center-block" /></a>
            <h4 class="text-center">MAJICA MAYORAL</h4>
            <h5 class="text-center">100,00 TK</h5>
          </div>
        </div>

      </div>

      <div id="slider-control">
      <a class="left carousel-control" href="#itemslider" data-slide="prev"><img src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Left" class="img-responsive" /></a>
      <a class="right carousel-control" href="#itemslider" data-slide="next"><img src="http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png" alt="Right" class="img-responsive" /></a>
    </div>
  </div>
  </div>
</div>
</div>

  )
}

export default Productslider ;