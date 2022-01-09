import React, { useState } from "react";
import "./brandslider.css";
import HorizontalScroll from "./Component/HorizontalScrollMenu";
// import HorizontalScrollMenu from "./Component/HorizontalScrollMenu";
import { bid, grow, India } from "./images/icon";

const BrandSlider = () => {
  const list2 = [
    {
      id: 1,
      icon: grow,
    },
    {
      id: 2,
      icon: bid,
    },
    {
      id: 3,
      icon: India,
    },
    {
      id: 4,
      icon: bid,
    },
    {
      id: 4,
      icon: bid,
    },
    {
      id: 4,
      icon: bid,
    },
  ];
  const Brand = (list2) =>
    list2.map((item) => {
      return (
        <div className="Postcard" key={item.id}>
          <div className="postimage1">
            <img src={item.icon} alt="postcardimage1" />
          </div>
        </div>
      );
    });
  return (
    <div>
      <HorizontalScroll
        data={Brand(list2)}
        alignCenter={false}
        scrollToSelected={true}
      />
    </div>
  );
};
export default BrandSlider;
