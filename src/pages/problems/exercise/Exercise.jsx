import React from "react";
import { Outlet } from "react-router-dom";

const Exercise = () => {
  const data = [
    {
      id: 1,
      name: "Simple Array Sum",
      difficult: "Easy",
      desc: "this is a simple exemple for you",
    },
    {
      id: 2,
      name: "Simple Array Sum",
      difficult: "Easy",
      desc: "this is a simple exemple for you",
    },
    {
      id: 3,
      name: "Simple Array Sum",
      difficult: "Easy",
      desc: "this is a simple exemple for you",
    },
    {
      id: 4,
      name: "Simple Array Sum",
      difficult: "Easy",
      desc: "this is a simple exemple for you",
    },
    {
      id: 5,
      name: "Simple Array Sum",
      difficult: "Easy",
      desc: "this is a simple exemple for you",
    },
    {
      id: 6,
      name: "Simple Array Sum",
      difficult: "Easy",
      desc: "this is a simple exemple for you",
    },
  ];
  return (
    <div>
      <section className="container mx-auto py-[50px]">
        <h2>Problem Solving</h2>
        <div className="flex flex-col gap-[20px]">
          {data.map((item) => (
            <div
              key={item.id}
              className="min-h-[150px] flex items-center justify-between bg-[white] px-[40px] rounded-[10px]"
            >
              <div className="">
                <h3>{item.name}</h3>
                <p>
                  <span>{item.difficult}</span> {item.desc}
                </p>
              </div>
              <button>Solve Challenge</button>
            </div>
          ))}
        </div>
        <div className=""></div>
      </section>
    </div>
  );
};

export default Exercise;
