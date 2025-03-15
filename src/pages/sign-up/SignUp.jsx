import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";

function SignUp() {
  const [type, SetType] = useState(false);
  const [confirm, SetConfirm] = useState(false);


  return (
    <>
      <section
        style={{ height: "calc(100vh - 90px)" }}
        className=" h-[85vh] flex justify-center pt-[50px]"
      >
        <form
          className="w-[400px] h-[550px] flex flex-col gap-[40px] bg-[white] p-[30px]"
          action=""
        >
          <h2 className="text-center text-[24px]">Masalify</h2>

          <input
            className="border-[#00000063] border-[1px] h-[40px] rounded-[5px] outline-none pl-[20px]"
            type="text"
            placeholder="Username"
          />
          <div className="border-[#00000063] flex items-center border-[1px] h-[40px] rounded-[5px]">
            <input
              style={{ width: "calc(100% - 30px)" }}
              className="outline-none pl-[20px]"
              type={type ? "text" : "password"}
              placeholder="Password"
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
          <div className="border-[#00000063] flex items-center border-[1px] h-[40px] rounded-[5px] ">
            <input
              style={{ width: "calc(100% - 30px)" }}
              className="outline-none pl-[20px]"
              type={confirm ? "text" : "password"}
              placeholder="Confirm password"
            />
            <button
              type="button"
              onClick={() => {
                SetConfirm((prev) => !prev);
              }}
            >
              {confirm ? (
                <LuEyeClosed className="text-[#00000063]" />
              ) : (
                <LuEye className="text-[#00000063]" />
              )}
            </button>
          </div>

          <input
            className="border-[#00000063] border-[1px] h-[40px] rounded-[5px] outline-none pl-[20px]"
            type="email"
            placeholder="Email"
          />

          <button
            className="w-[100%] h-[40px] bg-[#333] rounded-[5px] text-white"
            type="submit"
          >
            Sign in
          </button>

          <div className="flex items-center justify-center gap-[5px]">
            <p className="text-[#00000063] text-[14px]">Have an Account?</p>
            <Link
              to={"/sign-in "}
              className="text-[14px] hover:text-blue-500 hover:cursor-pointer"
            >
              Sign up
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default SignUp;
