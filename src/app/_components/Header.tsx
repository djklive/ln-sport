import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="navbar relative flex justify-center p-4 z-10">
      <div className="flex w-5/6 items-center justify-between bg-blue-900/30 p-4 text-white">
        <div className="flex items-center">
          <Image src="/ln-icon.png" alt="Football News" width={50} height={1} />
          <a className="btn btn-ghost text-xl">LN FOOT</a>
        </div>
        <div  className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#" className="hover:text-orange-500">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Actualités
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Scores
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
