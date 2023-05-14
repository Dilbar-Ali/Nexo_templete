import React from "react";
import Button from "../Button";
import imageslide from "../../assets/nexo-pro-cta-charts-mobile.png";
import bgimage from "../../assets/nexo-pro-planet-img-mobile.png";
import bg1image from "../../assets/nexo-pro-cta-background@2x.jpg";

const Trading = () => {
  return (
    <div
      className=" w-[82%] rounded-xl mx-auto"
      style={{
        backgroundImage: `url(${bg1image})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div
        className=" rounded-xl  flex leading-loose  items-center justify-center mt-[7rem] w-[100%] text-white opacity-1 mx-auto p-4"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        <div>
          <h1 className="text-2xl font-medium">
            The Right Place to Become a Pro
          </h1>
          <p className="w-96 mt-3 mb-5 ">
            Trade crypto with aggregated liquidity on Nexo Pro. Place market and
            limit orders, execute automated strategies, trade with margin, and
            open futures contracts.
          </p>
          <Button />
        </div>
        <div >
          <img src={imageslide} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trading;
