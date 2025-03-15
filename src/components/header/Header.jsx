import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-[#1a1a1a] text-[#fff]">
        <nav className="container mx-auto flex items-center justify-between h-[80px]">
          <NavLink to={"/"}>
            <h1>Masalify</h1>
          </NavLink>

          <ul className="flex items-center justify-between gap-[60px]">
            <li className="cursor-pointer hover:text-[#000] hover:bg-[white] px-[10px] py-[5px] rounded-[30px] hover:duration-300">
              <NavLink to={"/problems/dashboard"}>Problems</NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#000] hover:bg-[white] px-[10px] py-[5px] rounded-[30px] hover:duration-300">
              Courses
            </li>
            <li className="cursor-pointer hover:text-[#000] hover:bg-[white] px-[10px] py-[5px] rounded-[30px] hover:duration-300">
              Product
            </li>

            <li className="cursor-pointer hover:text-[#000] hover:bg-[white] px-[10px] py-[5px] rounded-[30px] hover:duration-300">
              <NavLink to={"/sign-in"}>Sign-in</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
