import { replaceString } from "@/utils/replaceString";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import PaginationButton from "../PaginationButton";
import {
  faArrowLeft,
  faArrowRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Title";

const DataTableArticle = ({
  data,
  page,
  currentPage,
}: {
  data: any;
  page: (add: number) => any;
  currentPage: number;
}) => {
  const columHelper = createColumnHelper();

  const columns = [
    columHelper.accessor("slug", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "Slug",
    }),
    columHelper.accessor("title", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "Title",
    }),
    columHelper.accessor("caption", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "Caption",
    }),
    columHelper.accessor("description", {
      cell: (info) => <span>{replaceString(info.getValue(), 24)}</span>,
      header: "Description",
    }),
    columHelper.accessor("aksi", {
      cell: () => (
        <div className="flex gap-2 justify-center items-center">
          <button className="py-1 px-2 rounded-md bg-primary text-white flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faEye} />
            <p>lihat</p>
          </button>
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
      <Title text="list article" />
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
          onClick={() => page(currentPage - 1)}
          isDisabled={currentPage <= 1}
          icon={faArrowLeft}
          text="prev"
        />
        <p className="flex items-center font-bold text-secondary">
          page {currentPage}
        </p>
        <PaginationButton
          onClick={() => page(currentPage + 1)}
          isDisabled={currentPage >= 3}
          icon={faArrowRight}
          text="next"
        />
      </div>
    </>
  );
};

export default DataTableArticle;
