import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Problems from "./pages/problems/Problems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="min-h-[90vh]">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Problems />} path="/problems" />
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<SignUp />} path="/sign-up" />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
