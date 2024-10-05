import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-100 text-center mt-8 ">
      <div className="flex justify-center items-center gap-6 text-lg">
        <a
          href="https://www.linkedin.com/in/abdelrahmmaan/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        -
        <a
          href="https://github.com/AbdelrahmanAlsayed"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
