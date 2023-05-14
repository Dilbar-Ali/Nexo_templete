import React from "react";
import Button from "../Button";
import bgimage from "../../assets/slider-background-03.jpg";
import cardimg1 from "../../assets/visual_referral_02@2x.png";
import cardimg2 from "../../assets/visual_affiliate_02_earn_hidden.png";
const Cards = () => {
  return (
    <div className="flex justify-around">
      
      <div
        className="w-[35%] p-5 h-[80vh] flex flex-col my-40 py-24 leading-loose rounded-xl"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div>
          <h4 className="text-blue-700">THE RIGHT PLACE TO</h4>
          <h1 className="text-2xl font-medium">
            Bring Your Friends and Win Rewards
          </h1>
          <p className="text-gray-400">
            Introduce your friends to the world of crypto and get unlimited
            rewards. Receive $25 in rewards with each successful referral.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="w-80">
            <Button />
          </div>
          <div className="w-80">
            <img src={cardimg1} alt="" />
          </div>
        </div>
      </div>
      <div
        className="w-[35%] p-5 h-[80vh] flex flex-col my-40 py-24 leading-loose rounded-xl"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div>
          <h4 className="text-blue-700">THE RIGHT PLACE TO</h4>
          <h1 className="text-2xl font-medium">
            Bring Your Friends and Win Rewards
          </h1>
          <p className="text-gray-400">
            Introduce your friends to the world of crypto and get unlimited
            rewards. Receive $25 in rewards with each successful referral.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="w-80">
            <Button />
          </div>
          <div className="w-80">
            <img src={cardimg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
