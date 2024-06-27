"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-primary mx-2 rounded-md py-4 capitalize text-lg font-bold text-white mb-16"
    >
      logout
    </button>
  );
};

export default LogoutButton;
