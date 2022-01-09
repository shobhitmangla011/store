import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg sticky-top " >
                <div className="container-fluid">
                    <div style={{width: "300px",height: "116px",backgroundColor: "#fd5d14",display: "flex"}}> 
                        <div className="navbar-brand" href="#">INFA STORE</div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="Navigation">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item0">
                            <a className="nav-link" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item1">
                            <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item2">
                            <a className="nav-link" href="#">OUR PRODUCTS</a>
                            </li>
                            <li className="nav-item3">
                            <a className="nav-link" href="#">PARTNER</a>
                            </li>
                            <li className="nav-item4">
                            <a className="nav-link" href="#">INFRABID</a>
                            </li>
                         
                        </ul>
                        <div className="effect"></div>
                        <div className="Rectangle-33">
                        <div className="btn11"><span className="text1">GET QUOTATION</span></div>
                    </div>
                    </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header;