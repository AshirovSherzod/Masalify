import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
        <nav className="container mx-auto flex justify-between items-center h-[100px]">
          <h4>Copyright © 2025 Masalify</h4>

          <ul className="flex gap-[20px] text-[14px]">
            <li className="border-r-[1px] pr-[20px] ">Help Center</li>
            <li className="border-r-[1px] pr-[20px]">Jobs</li>
            <li className="border-r-[1px] pr-[20px]">Bug Bounty</li>
            <li className="border-r-[1px] pr-[20px]">Students</li>
            <li className="border-r-[1px] pr-[20px]">Terms</li>
            <li>Pivacy Policy</li>
          </ul>
        </nav>
      </footer>
  )
}

export default Footer
