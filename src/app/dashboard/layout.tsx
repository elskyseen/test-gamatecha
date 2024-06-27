"use client";
import LogoutButton from "@/components/LogoutButton";
import NavLink from "@/components/NavLink";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const countPath = path.split("/");
  const memoChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <section className="w-full min-h-dvh max-h-dvh">
      <div className="flex min-h-dvh relative">
        <div className="flex flex-col justify-between w-72 bg-white fixed min-h-dvh">
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="text-4xl text-center font-bold text-primary uppercase">
              articles
            </h1>
            <NavLink
              path="/dashboard"
              isActive={countPath.length === 2}
              label="user"
            />
            <NavLink
              path="/dashboard/articles"
              isActive={countPath.length === 3}
              label="articles"
            />
          </div>
          <LogoutButton />
        </div>
        <div className="m-6 w-full bg-white rounded-xl ml-80 p-20">
          <SessionProvider>{memoChildren}</SessionProvider>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
