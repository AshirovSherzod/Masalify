import React from "react";
import Interviews from "../../../components/problems/interviews/Interviews";
import ProgramLan from "../../../components/programlan/ProgramLan";
import Newjobs from "../../../components/problems/newjobs/Newjobs";

const Dashboard = () => {
  return (
    <>
      <Interviews />
      <ProgramLan />
      <Newjobs />
    </>
  );
};

export default Dashboard;
