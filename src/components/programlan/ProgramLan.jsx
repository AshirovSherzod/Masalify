import {
  FaReact,
  FaDatabase,
  FaPython,
  FaJava,
  FaCuttlefish,
  FaRobot,
  FaCode,
  FaShapes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const topics = [
  { name: "Algorithms", icon: <FaCode /> },
  { name: "Data Structures", icon: <FaShapes /> },
  { name: "Mathematics", icon: <FaShapes /> },
  { name: "Artificial Intelligence", icon: <FaRobot /> },
  { name: "C", icon: <FaCuttlefish /> },
  { name: "C++", icon: <FaCuttlefish /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Ruby", icon: <FaCode /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Databases", icon: <FaDatabase /> },
  { name: "Linux Shell", icon: <FaCode /> },
  { name: "Functional Programming", icon: <FaCode /> },
  { name: "Regex", icon: <FaCode /> },
  { name: "React", icon: <FaReact /> },
];

export default function ProgramLan() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-[10px] overflow-hidden shadow-md">
        {topics.map((topic, index) => (
          <Link
            to={"/problems/exercise"}
            key={index}
            className="flex items-center p-4 bg-[white] border-[1px] border-[#f5f5f5] hover:bg-[#ebebf3] hover:border-[#ebebf3]"
          >
            <span className="text-xl text-gray-700 mr-3">{topic.icon}</span>
            <span className="text-gray-800 font-semibold">{topic.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
