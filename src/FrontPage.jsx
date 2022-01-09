import React from "react";
import {
  Builder,
  Connect1,
  Connect2,
  Connect3,
  Connect4,
  Group39,
  Register,
  India,
  bid,
  aboutus,
  grow,
  Payment,
} from "./images/icon";
import "./Frontpage.css";
import { Carousel } from "react-bootstrap";
import Productslider from "./Productslider";
import Products from "./Products";
import brandslider from "./brandslider";
import BrandSlider from "./brandslider";

const FrontPage = () => {
  return (
    <div>
      <div className="description">
        <div className="description1">
          Welcome to
          <br />
        </div>
        <div className="description2">Infrastore</div>
        <p className="welcome-desc">
          <br />
          One stop shop for all building and
          <br />
          construction material
        </p>
      </div>
      <div className="About us">
        <div className="about-us">
          <span className="ABOUT US">ABOUT US</span>
        </div>
        <div className="about-us2">
          <div className="image">
            <img src={aboutus} />
          </div>
          <div>
            <p className="about-us-desc">
              Infrastore is a tech based company trying to change the
              procurement process of construction and real estate business.
              <br /><br />
              InfraStore is responsible for offering genuine products and
              economics of scale on material pricing.
              <br /> <br />
              Additionally, our customer can use INFRABID platform to discover
              new growth opputunities across public & private tenders, reverse
              and forward auction on machineries and products.
            </p>
          </div>
        </div>
      </div>
      <div className="ourproduct">
        <div className="our-product">
          <span className="our-product">OUR PRODUCTS</span>
        </div>
        <Products />
      </div>

      <div className="background">
        <div className="partner with us">
          <div className="partner-with-us">
            <span className="PARTNER WITH US">PARTNER WITH US</span>
          </div>
          <p className="partnerwithus">
            Partnering with us without any hassles fee and get instant access to
            Pan India market. You can sell small or bulk quantity , get access
            to our bidding platform and grow your business without disturbing
            your core product.
          </p>

          <div class="container team">
            <div class="row">
              <div class="card col-lg-1 text-center">
                <img
                  class="card-img-top fluid"
                  src={Register}
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Register</h4>
                </div>
              </div>
              
              <div class="card col-lg-1 text-center">
                <img class="card-img-top fluid" src={India} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Pan India Reach</h4>
                </div>
              </div>
              <div class="card col-lg-1 text-center">
                <img
                  class="card-img-top fluid"
                  src={Payment}
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Secure Payment</h4>
                </div>
              </div>
              <div class="card col-lg-1 text-center">
                <img class="card-img-top fluid" src={bid} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Access to bidding platform</h4>
                </div>
              </div>
              <div class="card col-lg-1 col-sm-1 col-md-1 text-center">
                <img class="card-img-top fluid" src={grow} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">Grow Business</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Rectangle-5">
                    <div className="Rectangle-6">
                    <span className="We-Deal-In">Brands</span>
                    </div>   
                         
                </div>  

      <BrandSlider />
    {/*<div className="pexels-soner-mazlum-6890408-1">
        <div className="Rectangle-5">
          <div className="Rectangle-6">
            <span className="get-support">GET A FREE SUPPORT</span>
          </div>
        </div>
        <p className="Ready-to-start-your-next-project-with-us-Thats-great-Give-us-a-call-or-email-us-and-we-will-get-b">
          Ready to start your next project with us? That's great! Give us a call
          or email us and we will get back to you as soon as possible!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "5rem",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%" }}
              width="50"
              height="50"
              fill="green"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <div style={{ marginTop: "2rem" }}>+91 8860762540</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%" }}
              width="50"
              height="50"
              fill="green"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
            <div style={{ marginTop: "2rem" }}>Info@infrastore.com</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FrontPage;
