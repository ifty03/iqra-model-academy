import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 items-center py-3 bg-primary text-white font-medium  border-t-2 border-secondary">
      <Link to="/">Add Student</Link>
      <Link to="/">Add Student</Link>
      <Link to="/">Add Student</Link>
      <Link to="/">Add Student</Link>
    </div>
  );
};

export default Navbar;
