import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

const Company = () => {
  return (
    <section className=" flex flex-row justify-between gap-[40px] py-[100px] bg-white">
      <div className="container mx-auto flex justify-between gap-[40px]">
      <div className="w-[50%] flex flex-col gap-[40px]">
        <div className="flex flex-row items-center">
          <div className="w-[65px] h-[65px] flex items-center justify-center text-[16px] rounded-[40px] bg-[#259AF3]">
            <span className="w-[35px] h-[35px] flex items-center justify-center  rounded-[40px] bg-[white] text-[#259AF3]">
              3650
            </span>
          </div>
          <div className="w-[65px] h-[65px] flex items-center justify-center text-[20px] rounded-[40px] bg-[#4dd161]">
            <span className="w-[35px] h-[35px] flex items-center justify-center  rounded-[40px] bg-[white] text-[#4dd161]">
              <FaPeopleGroup />
            </span>
          </div>
        </div>
        <h3 className="text-[22px] text-[#259AF3]">
          Questions, Communitiy & Contents
        </h3>
        <p className="text-[#000000A6]">
          Over 3650 questions for you to practice. Come and join one of the
          largest tech communities with hundreds of thousands of active users
          and participate in our contests to challenge yourself and earn
          rewards.
        </p>
        <button className="w-[150px] text-left text-[#259AF3]">
          View Qustions{" "}
        </button>
      </div>

      <div className="w-[2px] bg-[gray]"></div>

      <div className="w-[50%] flex flex-col gap-[40px]">
        <div className="flex flex-row items-center">
          <div className="w-[65px] h-[65px] flex items-center justify-center text-[16px] rounded-[40px] bg-[#259AF3]">
            <span className="w-[35px] h-[35px] flex items-center justify-center  rounded-[40px] bg-[white] text-[#259AF3]">
              3650
            </span>
          </div>
          <div className="w-[65px] h-[65px] flex items-center justify-center text-[20px] rounded-[40px] bg-[#4dd161]">
            <span className="w-[35px] h-[35px] flex items-center justify-center  rounded-[40px] bg-[white] text-[#4dd161]">
              <FaPeopleGroup />
            </span>
          </div>
        </div>
        <h3 className="text-[22px] text-[#B7892B]">Companies & Candidates</h3>
        <p className="text-[#000000A6]">
          Not only does LeetCode prepare candidates for technical interviews, we
          also help companies identify top technical talent. From sponsoring
          contests to providing online assessments and training, we offer
          numerous services to businesses.
        </p>
        <button className="w-[200px] text-left text-[#259AF3]">
          Business Opportunities
        </button>
      </div>
      </div>
    </section>
  );
};

export default Company;
