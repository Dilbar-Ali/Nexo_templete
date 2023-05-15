import React from "react";
import img1 from "../../assets/apple-touch-icon.png";
import img2 from '../../assets/badge-app-store.svg'
import img3 from '../../assets/badge-google-play.svg';
import {
  BsTwitter,
  BsFillStopwatchFill,
  BsFillSendFill,
  BsFacebook,
  BsFillStarFill,
} from "react-icons/bs";
const Fotter = () => {
  return (
    <div>
      <div className="flex justify-around items-center mt-28">
        <div>
          <div>
            <img src={img1} className="w-16" alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-medium text-blue-700">nexo</h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-medium">Sign up for updates</h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-1 p-3 border-black"
            />
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-2xl font-medium">Follow us</h1>
          </div>
          <div className="flex gap-4 mt-3">
            <div className="shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800">
              {" "}
              <BsTwitter />{" "}
            </div>
            <div className="shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800">
              <BsFillStopwatchFill />
            </div>
            <div className="shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800">
              <BsFillSendFill />
            </div>
            <div className="shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800">
              <BsFacebook />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div className=" bg-gray-300 p-2 text-2xl rounded-lg w-12 text-center text-green-500">
                <BsFillStarFill />
              </div>
              <div>
                <h1 className="text-2xl font-medium">Trustpilot</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div className=" bg-green-500 p-1 text-xl rounded-lg text-white">
                <BsFillStarFill />
              </div>
              <div className=" bg-green-500 p-1 text-xl rounded-lg text-white">
                <BsFillStarFill />
              </div>
              <div className=" bg-green-500 p-1 text-xl rounded-lg text-white">
                <BsFillStarFill />
              </div>
              <div className=" bg-green-500 p-1 text-xl rounded-lg text-white">
                <BsFillStarFill />
              </div>
              <div className=" bg-green-500 p-1 text-xl rounded-lg text-white">
                <BsFillStarFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-96 flex justify-around leading-loose mt-8">
        <div>
          <h1>Products</h1>
          <ul>
            <li>Buy</li>
            <li>Earn</li>
            <li>Exchange</li>
            <li>Borrow</li>
            <li>Booster</li>
            <li>Nexo Card</li>
            <li>Nexo Pro</li>
            <li>Referral</li>
            <li>NFT Leding</li>
          </ul>
        </div>

        <div>
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Security</li>
            <li>License</li>
            <li>Nexo Prime</li>
            <li>Nexo Private</li>
            <li>Nexo Ventures</li>
            <li>Corporates</li>
            <li>Affiliates</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h1>Resources</h1>
          <ul>
            <li>Blog</li>
            <li>Media Center</li>
            <li>Help Center</li>
            <li> Contacts</li>
          </ul>
        </div>

        <div>
          <h1>Legal</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Services</li>
            <li>Borrow</li>
            <li>Earn Terms</li>
            <li>Exchage Terms</li>
            <li>DeFi Terms</li>
            <li>Staking Terms</li>
            <li>Nexo Card Terms</li>
            <li>Affiliate Terms</li>
            <li>Cookies Policy</li>

          </ul>
        </div>

        <div>
          <h1>Mobile App</h1>
          <ul className="flex flex-col gap-5">
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
