import React from "react";

import { Link } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div className="min-screen-height flex flex-col bg-white text-gray-800">
      <main className="flex-grow container mx-auto py-8">
        <h2 className="text-xl mb-4">Explore UI Challenges</h2>
        <ul className="space-y-4 list-decimal	list-inside ">
          <li>
            <Link to="/rating" className="text-blue-600 hover:underline">
              Rating Challenge
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default DefaultLayout;
