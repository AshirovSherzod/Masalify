import React from "react";

const Newjobs = () => {
  return (
    <section className=" bg-[#ebebf3] flex flex-col gap-[40px]  ">
      <div className="container mx-auto flex flex-col gap-[20px] mb-[50px]">
        <h2>
          Mock Interviews for you{" "}
          <span className="bg-[#d4d8f8] text-[#1142af] py-[5px] px-[8px] rounded-[15px]">
            New
          </span>
        </h2>
        <div className="flex justify-between items-center w-full">
          <div
            style={{ width: "calc((100% - 60px) / 3)" }}
            className="flex flex-col gap-[40px] p-[20px] bg-white  shadow-md rounded-[10px]"
          >
            <div className="">
              <h2 className="text-[24px]">Software Engineer</h2>
              <p className="text-[#00000063] text-[14px]">
                Problem solving(Medium)
              </p>
            </div>
            <button className="w-[120px] h-[35px] bg-[#13813a] text-[white] text-[14px] rounded-[5px]">
              Try for Free
            </button>
          </div>
          <div
            style={{ width: "calc((100% - 60px) / 3)" }}
            className="flex flex-col gap-[40px] p-[20px] bg-white  shadow-md rounded-[10px]"
          >
            <div className="">
              <h2 className="text-[24px]">Frontend Developer</h2>
              <p className="text-[#00000063] text-[14px]">React(Medium)</p>
            </div>
            <button className="w-[120px] h-[35px] bg-[#13813a] text-[white] text-[14px] rounded-[5px]">
              Try for Free
            </button>
          </div>
          <div
            style={{ width: "calc((100% - 60px) / 3)" }}
            className="flex flex-col gap-[40px] p-[20px] bg-white  shadow-md rounded-[10px]"
          >
            <div className="">
              <h2 className="text-[24px]">Backend Developer</h2>
              <p className="text-[#00000063] text-[14px]">Node(Medium)</p>
            </div>
            <button className="w-[120px] h-[35px] bg-[#13813a] text-[white] text-[14px] rounded-[5px]">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newjobs;
