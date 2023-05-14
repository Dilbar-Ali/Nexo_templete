import React from "react";
import img1 from "../../assets/award-1.jpg";
import img2 from "../../assets/award-2.jpg";
import img3 from "../../assets/award-3.jpg";
import img5 from "../../assets/award-5.jpg";
import img4 from "../../assets/award-4.jpg";
const Platform = () => {
  return (
    <div className="flex justify-center items-center mt-32 gap-9">
      <div className="w-96 leading-loose">
        <h1 className="text-3xl font-medium mb-6">
          Trusted, Award-Winning Digital Asset Platform
        </h1>
        <p className="text-gray-400">
          See all prestigious awards recognizing Nexo's cutting-edge technology,
          ease of use, and overall mission to serve as a bridge between
          traditional and digital finance.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7  ">
        <div>
          <img src={img3} className="w-44 transition duration-2 ease-1 transform hover:scale-110 align-middle" alt="" />
        </div>
        <div>
          <img src={img1} className="w-44 transition duration-2 ease-1 transform hover:scale-110 align-middle" alt="" />
        </div>
        <div>
          <img src={img2} className="w-44 transition duration-2 ease-1 transform hover:scale-110 align-middle" alt="" />
        </div>


        <div>
          <img src={img5} className="w-44 transition duration-2 ease-1 transform hover:scale-110 align-middle" alt="" />
        </div>
        <div>
          <img src={img4} className="w-44 transition duration-2 ease-1 transform hover:scale-110 align-middle" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Platform;
