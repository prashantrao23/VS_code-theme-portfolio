import React, { useContext, useState } from "react";
import "./Header.scss";
import codeIcn from "../assets/code-icn.svg";
import sunIcn from "../assets/sun-icn.svg";
import moonIcn from "../assets/moon-icn.svg";
import codeIcn2 from "../assets/code-icn-2.svg";
import linkIcn from "../assets/link-icn.svg";
import fileIcn from "../assets/file-icn.svg";
// import profilePic from '../assets/profile-pic.svg';
import { Menu } from "lucide-react";
import { useTheme } from "./themeContext";

function Header() {

  const { theme, toggleTheme, toggleExplorer } = useTheme();

  return (
    <div className="header px-3 py-2 grid grid-cols-2 md:grid-cols-3 items-center gap-x-1 gap-y-2 bg-[#DDDDDD] dark:bg-[#0E0E0E] border-b border-[#D4D4D4] dark:border-[#404751] p-4">
      <div className="workspace flex items-center gap-4 col-span-2 md:col-span-1 order-1">
        <div className="workspace__icon hidden md:flex gap-1.5">
          <span className="bg-[#ED6A5E] dark:bg-[#93000A] rounded-full"></span>
          <span className="bg-[#F5BF4F] dark:bg-[#019AD6] rounded-full"></span>
          <span className="bg-[#62C554] dark:bg-[#007ACC] rounded-full"></span>
        </div>
        <button className="flex md:hidden h-6 w-6 items-center justify-center bg-transparent text-[] dark:text-[#C0C7D3]" onClick={toggleExplorer}>
          <Menu />
        </button>
        <div className="workspace__name flex items-center gap-2 text-[#333333] dark:text-[#C0C7D3]">
          <img src={codeIcn} alt="Code Icon" />
          DevFolio — Prashant Rao
        </div>
      </div>
      <div className="searchbar flex justify-center order-3 md:order-2 col-span-3 md:col-span-1">
        <input
          type="search"
          placeholder="Search projects, skills, files..."
          className="searchbar__input w-full max-w-md min-w-8.4375rem px-4 bg-[#ffffff] dark:bg-[#2A2A2A] text-[#333333] dark:text-[#C0C7D3] shadow-md rounded-sm"
        />
      </div>
      <div className="profile-section content-center flex items-center justify-end gap-4 col-span-1 order-2 md:order-3">
        <div className="icons-section flex justify-end gap-1">
          <button className="theme-button" onClick={toggleTheme}>
            <img src={theme=='light' ? sunIcn : moonIcn} alt="Theme" />
          </button>
          {/* <button className="theme-button">
                        <img src={codeIcn2}  alt="Profile Picture" />
                    </button>
                    <button className="theme-button">
                        <img src={linkIcn} alt="Profile Picture" />
                    </button>
                    <button className="theme-button">
                        <img src={fileIcn} alt="Profile Picture" />
                    </button> */}
        </div>
        <button className="profile-button">
          <img src="" alt="Profile Picture" />
        </button>
      </div>
    </div>
  );
}

export default Header;
