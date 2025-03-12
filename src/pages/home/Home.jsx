import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SignIn from "../sign-in/SignIn";
import { FaPeopleGroup } from "react-icons/fa6";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Company from "../../components/company/Company";

function Home() {
  return (
    <>
      <Hero/>
      <Company/>
    </>
  );
}

export default Home;
