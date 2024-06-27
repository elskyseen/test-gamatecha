import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type ILink = {
  path: string;
  isActive: boolean;
  label: string;
  icon: any;
};

const NavLink: React.FC<ILink> = ({ path, isActive, label, icon }) => {
  return (
    <Link
      href={path}
      className={
        (isActive ? " bg-secondary/20" : " bg-white") +
        " py-2 mx-2 rounded-md text-xl font-bold text-center capitalize text-primary hover:bg-secondary/20 flex justify-center items-center gap-2"
      }
    >
      <FontAwesomeIcon icon={icon} />
      <p>{label}</p>
    </Link>
  );
};

export default NavLink;
