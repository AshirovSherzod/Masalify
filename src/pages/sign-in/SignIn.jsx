import { useState } from "react";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";

function SignIn() {
  const [type, SetType] = useState(false);
  return (
    <>
      <section
        style={{ height: "calc(100vh - 90px)" }}
        className=" h-[85vh] flex justify-center pt-[50px] bg-[#f3f3f3]"
      >
        <form
          className="w-[400px] h-[450px] flex flex-col gap-[40px] bg-[white] p-[30px]"
          action=""
        >
          <h2 className="text-center text-[24px]">Masalify</h2>

          <div className="flex flex-col gap-[5px]">
            <label className="text-[12px] text-[#00000063]" htmlFor="">
              Username
            </label>
            <input
              className="border-[#00000063] border-[1px] h-[40px] rounded-[5px] outline-none pl-[20px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label className="text-[12px] text-[#00000063]" htmlFor="">
              Password
            </label>
            <div className="border-[#00000063] flex items-center border-[1px] h-[40px] rounded-[5px] mb-[10px]">
              <input
                style={{ width: "calc(100% - 30px)" }}
                className="outline-none pl-[20px]"
                type={type ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => {
                  SetType((prev) => !prev);
                }}
              >
                {type ? (
                  <LuEyeClosed className="text-[#00000063]" />
                ) : (
                  <LuEye className="text-[#00000063]" />
                )}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px] hover:text-blue-500 hover:cursor-pointer">
                Forgot Password?
              </p>
              <Link to={"/sign-up"} className="text-[14px] hover:text-blue-500 hover:cursor-pointer">
                Sign Up
              </Link>
            </div>
          </div>
          <button
            className="w-[100%] h-[40px] bg-[#333] rounded-[5px] text-white"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </section>
    </>
  );
}

export default SignIn;
