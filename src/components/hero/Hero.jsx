import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[700px] flex justify-center items-center bg-[#1a1a1a]">
      <div className="container mx-auto  flex items-center justify-between">
        <div className="w-[450px] h-[350px] flex items-center justify-center bg-[white] rounded-[30px] rotate-[-10deg]">
          <div className="w-[430px] h-[330px] flex flex-row bg-[#f6f6f6] rounded-[30px]">
            <div className="w-[100px] h-[330px] flex flex-col gap-[5px] rounded-l-[30px]  py-[20px] px-[5px] border-r-[1px] border-[#bdb7b7]">
              <div className="w-[90px] h-[25px] rounded-[10px] bg-[#dddbdb]"></div>
              <div className="w-[90px] h-[25px] rounded-[10px] bg-[#dddbdb]"></div>
              <div className="w-[90px] h-[25px] rounded-[10px] bg-[#dddbdb]"></div>
              <div className="w-[90px] h-[25px] rounded-[10px] bg-[#dddbdb]"></div>
              <div className="w-[90px] h-[25px] rounded-[10px] bg-[#dddbdb]"></div>
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className=" w-[50%] flex flex-col gap-[40px] items-center text-center">
          <h2 className="text-[40px] text-[white]">A New Way To Learn</h2>
          <p className="text-[gray] text-[16px]">
            Masalify is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interviews.
          </p>
          <button className="w-[150px] h-[35px] bg-[#1DA09C] rounded-[40px] text-[white]">
            <Link to={"/sign-up"}>Create Account</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
