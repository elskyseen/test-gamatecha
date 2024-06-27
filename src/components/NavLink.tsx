import Link from "next/link";
import React from "react";

type ILink = {
  path: string;
  isActive: boolean;
  label: string;
};

const NavLink: React.FC<ILink> = ({ path, isActive, label }) => {
  return (
    <Link
      href={path}
      className={
        (isActive ? " bg-secondary/20" : " bg-white") +
        " py-2 mx-2 rounded-md text-xl font-bold text-center capitalize text-primary hover:bg-secondary/20"
      }
    >
      {label}
    </Link>
  );
};

export default NavLink;
