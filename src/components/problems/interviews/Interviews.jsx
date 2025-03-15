import React from "react";

const Interviews = () => {
  return (
    <section>
      <div className="container mx-auto h-[200px] flex flex-row items-center justify-between bg-[#1f202a] mt-[50px] px-[40px] rounded-[10px] shadow-md">
        <div className="text-white">
          <h2 className="text-[24px]">
            Looking for a new job as a Frontend Developer(React)?
          </h2>
          <p>Let us help you fast-track your job search</p>
        </div>
        <button className="h-[40px] w-[120px] bg-white rounded-[5px]">
          More Details
        </button>
      </div>
    </section>
  );
};

export default Interviews;
