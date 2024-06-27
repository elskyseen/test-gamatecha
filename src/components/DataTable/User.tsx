import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import PaginationButton from "../PaginationButton";

const DataTableUser = ({ data }: { data: any }) => {
  const columHelper = createColumnHelper();

  const columns = [
    columHelper.accessor("first_name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "FirstName",
    }),
    columHelper.accessor("last_name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "LastName",
    }),
    columHelper.accessor("username", {
      cell: (info) => info.getValue(),
      header: "Username",
    }),
    columHelper.accessor("email", {
      cell: (info) => info.getValue(),
      header: "Email",
    }),
    columHelper.accessor("aksi", {
      cell: () => (
        <div className="flex gap-2 justify-center items-center">
          <button>edit</button>
          <button>delete</button>
        </div>
      ),
      header: "Aksi",
    }),
  ];

  const table = useReactTable({
    data,
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
                " text-center text-lg font-medium"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-2 mr-4 gap-4">
        <PaginationButton
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanNextPage()}
          text="next"
        />
        <p className="flex items-center font-bold text-secondary">
          {table.getState().pagination.pageIndex +
            1 +
            " of " +
            table.getPageCount()}
        </p>
        <PaginationButton
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanPreviousPage()}
          text="next"
        />
      </div>
    </>
  );
};

export default DataTableUser;
