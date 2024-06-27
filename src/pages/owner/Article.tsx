import PaginationButton from "@/components/PaginationButton";
import { replaceString } from "@/utils/replaceString";
import React from "react";

const Article = ({
  articles,
  page,
  currentPage,
}: {
  articles: any;
  page: (add: number) => any;
  currentPage: number;
}) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {articles?.map((article: any) => {
        return (
          <div
            className="col-span-4 shadow-lg p-4 flex flex-col justify-between"
            key={article.id}
          >
            <div className="flex flex-col">
              <h1 className="text-2xl text-primary font-semibold capitalize mb-2">
                {replaceString(article.title, 30)}
              </h1>
              <span className="text-base font-semibold text-primary/40 mb-8">
                {replaceString(article.slug, 30)}
              </span>
              <p className="text-lg font-bold text-secondary mb-16">
                {replaceString(article.description, 200)}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-secondary">{article.caption}</p>
              <button className="text-base capitalize bg-secondary py-2 rounded-md text-white font-semibold">
                lihat
              </button>
            </div>
          </div>
        );
      })}
      <div className="col-span-12 flex justify-center gap-4 mt-4">
        <PaginationButton
          onClick={() => page(currentPage - 1)}
          isDisabled={currentPage <= 1}
          text="next"
        />
        <p className="flex items-center font-bold text-secondary">
          page {currentPage}
        </p>
        <PaginationButton
          onClick={() => page(currentPage + 1)}
          isDisabled={currentPage >= 3}
          text="next"
        />
      </div>
    </div>
  );
};

export default Article;
