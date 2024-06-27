"use client";
import { getArticles } from "@/api/getArticles";
import PaginationButton from "@/components/PaginationButton";
import { replaceString } from "@/utils/replaceString";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const { data: session } = useSession();

  const getAllArticles = async () => {
    const data = await getArticles(session?.user.token, currentPage);
    setArticles(data.data);
  };

  useEffect(() => {
    getAllArticles();
  }, [session, currentPage]);

  const columHelper = createColumnHelper();

  const columns = [
    columHelper.accessor("slug", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "FirstName",
    }),
    columHelper.accessor("title", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "LastName",
    }),
    columHelper.accessor("caption", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "Username",
    }),
    columHelper.accessor("description", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "Email",
    }),
    columHelper.accessor("aksi", {
      cell: () => (
        <div className="flex gap-2 justify-center items-center">
          <button className="py-1 px-2 rounded-md bg-primary text-white">
            lihat
          </button>
        </div>
      ),
      header: "Aksi",
    }),
  ];

  const table = useReactTable({
    data: articles,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <table className="w-full border-2 border-primary">
        <thead className="bg-primary text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr
              key={row.id}
              className={
                (i % 2 === 0 ? "bg-slate-100/40" : "bg-slate-300/40") +
                " text-lg font-medium"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-2 mr-4 gap-4">
        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          isDisabled={currentPage <= 1}
          text="next"
        />
        <p className="flex items-center font-bold text-secondary">
          page {currentPage}
        </p>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          isDisabled={currentPage >= 3}
          text="next"
        />
      </div>
    </>
  );
};

export default page;
