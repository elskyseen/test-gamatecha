"use client";
import React, { useEffect, useState } from "react";
import { getAllUser } from "@/api/getAllUser";
import { useSession } from "next-auth/react";
import DataTableUser from "@/components/DataTable/User";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  const getUsers = async () => {
    const data = await getAllUser(session?.user.token);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, [session]);

  if (session?.user.role === "admin") {
    return <DataTableUser data={users} />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary capitalize mb-2">
        profile user
      </h1>
      <p className="text-2xl text-secondary">nama : {session?.user?.name}</p>
      <p className="text-2xl text-secondary">role : {session?.user?.role}</p>
    </div>
  );
};

export default Dashboard;
