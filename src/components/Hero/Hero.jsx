import Button from "../Button";
import Navbar from "../Navbar/Navbar";
import Slider from '../slider/Slider';
import Counting from "../Counting/Counting";
import Trading from "../Trading/Trading";
import Hero_img from "../../../src/assets/nexo-app@2x.png";
import Features from "../../components/Features/Features"
import {
  BsApple,
  BsGooglePlay,
  BsStarFill,
  BsCodeSquare,
  BsIntersect,
} from "react-icons/bs";
import Cards from "../Cards/Cards";
const Hero = () => {
  return (
    <>
    <section className="h-full relative z-0  bg-blue-800 font-[Poppins] md:bg-top bg-center">
      <Navbar />
      <div className="flex items-center justify-center ">
        <div className="leading-loose">
          <h1 className="text-5xl font-bold text-white leading-loose">
            Buy, Trade & Store
          </h1>
          <h3 className="text-3xl font-semiboldbold text-white leading-loose">
            Bitcoin and 60+ Digital Assets
          </h3>
          <h4 className="text-1xl font-md text-gray-400  leading-loose">
            Grow your crypto wealth and keep it secure with Nexo.
          </h4>

          <div className="flex gap-4  leading-loose mt-5">
            <Button />

            <div className="flex gap-2 items-center  leading-10">
              <div className="text-white text-2xl">
                <BsApple />
              </div>
              <div className="text-white text-2xl">
                <BsGooglePlay />
              </div>
            </div>
          </div>

          <div className="text-white text-md flex gap-7 leading-10 mt-5 ">
            <div>
              <div>
                <p className="text-gray-400 text-sm">Rated Excellent on</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl ">
                  <BsStarFill />
                </div>
                <div>Trustpilot</div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-gray-400 text-sm">
                  Insurance on custodial assets by
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl ">
                  <BsCodeSquare />
                </div>
                <div>
                  Trustpilot <span>bakkt</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-gray-400 text-sm">
                  Real-time attestation by
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl ">
                  <BsIntersect />
                </div>
                <div>MORRE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img  src={Hero_img} className="h-screen w-full" alt="Hero Image Here" />
        </div>
      </div>
    </section>

    <section >
      <div>
      <Slider/>
      
      </div>
    </section>
    <section>
      <Counting/>
    </section>
    <section>
    <Trading/>
    <Cards/>
    <Features/>
    </section>
    </>
  );
};

export default Hero;
