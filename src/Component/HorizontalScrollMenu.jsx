import React from "react";
import { FontIcon } from "@fluentui/react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../images/icon";

const HorizontalScrollMenu = (props) => {
  const Arrow = ({ text, className, margin }) => {
    return (
      <div
      className={className}
        style={{
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <div style={{ padding: "10px" }}>
          {text === "right" ? (
            props.arrowType === "small" ? (
              <FontIcon
                iconName={"CaretSolidRight"}
                style={{ fontSize: "30px" }}
              />
            ) : (
              <img
                className="iconimage"
                src={RightArrow}
                alt="icon"
                style={{
                  fontSize: "30px",
                  padding: "6.5px 15px",
                  color: "black",
                  borderRadius: "4px",
                  lineHeight: "1.499",              
                  maxWidth: "80px",
                }}
              />
            )
          ) : props.arrowType === "small" ? (
            <FontIcon
              iconName={"CaretSolidLeft"}
              style={{ fontSize: "0px"}}
            />
          ) : (
            <img
              src={LeftArrow}
              alt="icon"
              style={{ 
                  fontSize: "30px",
                  padding: "6.5px 15px",
                  borderRadius: "4px",
                  lineHeight: "1.499",
                  transform: "rotate(180deg)",
                  maxWidth: "80px" 
                }}
            />
          )}
        </div>
      </div>
    );
  };
  const ArrowLeft = Arrow({
    text: "left",
    className: "arrow-prev",
    margin: props.arrowType === "expand" ? "0 0 0 -18px" : null,
  });
  const ArrowRight = Arrow({
    text: "right",
    className: "arrow-next",
    margin: props.arrowType === "expand" ? "0 -18px 0 0" : null,
  });

  return (
    <ScrollMenu
      data={props.data}
      arrowLeft={ArrowRight}
      arrowRight={ArrowLeft}
      hideArrows={true}
      hideSingleArrow={true}
      wrapperStyle={false}
      transition={1.5}
      alignCenter={props.alignCenter}
      wheel={false}
      dragging={
        props.dragging
        // props.hasOwnProperty("dragging") === true ? props.dragging : true
      }
    />
  );
};

export default HorizontalScrollMenu;
