"use client";
import UpdateUser from "@/components/UpdateUser";
import { SessionProvider } from "next-auth/react";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <SessionProvider>
      <UpdateUser id={params.id} />;
    </SessionProvider>
  );
};

export default page;
