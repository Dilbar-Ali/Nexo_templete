import React from "react";
import Button from "../Button";
import imageslide from "../../assets/nexo-dashboard@2x.png";


const Portfolio = () => {
  return (
    <div
      className=" w-[82%] rounded-xl mx-auto bg-blue-800 "
      
    >
      <div
        className=" rounded-xl  flex leading-loose  items-center justify-center mt-[7rem] w-[100%] text-white opacity-1 mx-auto p"

      >
        <div className="p-8">
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
          <img src={imageslide} className="w-80 pt-6" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
