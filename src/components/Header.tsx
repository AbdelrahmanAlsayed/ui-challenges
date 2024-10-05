import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-gray-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          UI Challenges
        </Link>
        <BackButton />
      </div>
    </header>
  );
};

export default Header;
