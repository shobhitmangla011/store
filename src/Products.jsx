import React, { useState } from "react";
import { compound, Construction, Group1, Group2, Group4, Group39, Group40, Group5, Group6, sink, tiles, wiring, wood } from "./images/icon";
import "./Products.css";

const Products = () => {
    const [modevalue,setModevalue] = useState(0);
    const renderScreenLayout = (val) => {
        console.log(val);
        switch(val) {
            case 0: 
                return (
                    <div className="content">
                        <img src={Group4} alt="Construction Chemicals" />
                    </div>
                );
            case 1: 
                return (
                    <div className="content">
                        <img src={Group40} alt="Construction Chemicals" />
                    </div>
                );
            case 2: 
                return (
                    <div className="content">
                        <img src={Group2} alt="Plywood" />
                    </div>
                );   
            case 3: 
                return (
                    <div className="content">
                        <img src={Group6} alt="Hardware & Sanitary" />
                    </div>
                );
            case 4: 
                return (
                    <div className="content">
                        <img src={Group5} alt="Marble & Tiles" />
                    </div>
                );
            case 5: 
                return (
                    <div className="content">
                        <img src={Group1} alt="Marble & Tiles" />
                    </div>
                );
        }
    }
    return (
        <div className="bck">
            {renderScreenLayout(modevalue)}
            <ul id='timeline'>
                    <li className='entry'>
                        <input className='radio' id='trigger' name='trigger' type='radio'  />
                        <div className='trigger'>
                        <img src={Construction} alt="construct" width="60px" onMouseOver={() => setModevalue(0)} onMouseOut={() => setModevalue(0)} onClick={() => setModevalue(0)}/>
                        <div onClick={() => setModevalue(0)} onMouseOver={() => setModevalue(0)} onMouseOut={() => setModevalue(0)}>
                            Building Material
                        </div>
                        </div>
                    <div className='circle'></div>
                    </li> 
                    <li className='entry'>
                        <input className='radio' id='trigger' name='trigger' type='radio' />
                        <div className='trigger'  >
                        <img src={compound} alt="construct" width="60px" onMouseOver={() => setModevalue(1)} onMouseOut={() => setModevalue(0)} onClick={() => setModevalue(1)}/>
                        <div onClick={() => setModevalue(1)} onMouseOver={() => setModevalue(1)} onMouseOut={() => setModevalue(0)}>
                        Construction Chemicals
                        </div>
                        </div>
                        <div className='circle'></div>
                    </li>
                    <li className='entry'>
                        <input className='radio' id='trigger' name='trigger' type='radio' />
                        <div className='trigger'>
                        <img src={wood} alt="construct" width="60px" onMouseOver={() => setModevalue(2)} onMouseOut={() => setModevalue(0)} onClick={() => setModevalue(2)}/>
                        <div onClick={() => setModevalue(2)} onMouseOver={() => setModevalue(2)} onMouseOut={() => setModevalue(0)}>
                        Plywood
                        </div>
                        </div>
                        <div className='circle'></div>
                    </li>
                    <li className='entry'>
                        <input className='radio' id='trigger' name='trigger' type='radio' />
                        <div className='trigger'>
                        <img src={sink} alt="construct" width="60px" onMouseOver={() => setModevalue(3)} onMouseOut={() => setModevalue(0)} onClick={() => setModevalue(3)}/>
                        <div onClick={() => setModevalue(3)} onMouseOver={() => setModevalue(3)} onMouseOut={() => setModevalue(0)}>
                            Hardware & Sanitary
                        </div>
                        </div>
                        <div className='circle'></div>
                    </li>
                    <li className='entry'>
                        <input className='radio' id='trigger1' name='trigger' type='radio' />
                        <div className='trigger'>
                        <img src={tiles} alt="construct" width="60px" onMouseOut={() => setModevalue(0)} onMouseOver={() => setModevalue(4)} onClick={() => setModevalue(4)}/>
                        <div onClick={() => setModevalue(4)} onMouseOver={() => setModevalue(4)} onMouseOut={() => setModevalue(0)}>
                            Marble & Tiles
                        </div>
                        </div>
                        <div className='circle'></div>
                    </li>
                    <li className='entry'>
                        <input className='radio' id='trigger' name='trigger' type='radio' />
                        <div className='trigger'  >
                        <img src={wiring} alt="construct" width="60px" onMouseOver={() => setModevalue(5)} onMouseOut={() => setModevalue(0)} onClick={() => setModevalue(5)}/>
                        <div onClick={() => setModevalue(5)} onMouseOver={() => setModevalue(5)} onMouseOut={() => setModevalue(0)}>
                        Electricals
                        </div>
                        </div>
                        <div className='circle'></div>
                    </li>
            </ul>
        </div>
    )
}

export default Products;