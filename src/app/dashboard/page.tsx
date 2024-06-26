"use client";

import { signOut } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      page{" "}
      <button onClick={() => signOut({ callbackUrl: "/" })}>signout</button>
    </div>
  );
};

export default Dashboard;
