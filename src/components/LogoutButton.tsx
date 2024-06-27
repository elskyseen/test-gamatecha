"use client";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-primary mx-2 rounded-md py-4 capitalize text-lg font-bold text-white mb-16 flex justify-center items-center gap-2"
    >
      <p>logout</p>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default LogoutButton;
