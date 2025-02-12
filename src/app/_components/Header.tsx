import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-blue-900 p-4 text-white">
      <h1 className="text-xl font-bold">⚽ InfoFoot</h1>
      <nav>
        <ul className="flex space-x-4">
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
      </nav>
    </header>
  );
};

export default Header;
