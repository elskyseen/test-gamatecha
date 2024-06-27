"use client";
import { getArticles } from "@/api/getArticles";
import DataTableArticle from "@/components/DataTable/Article";
import Article from "@/pages/owner/Article";
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

  if (session?.user.role === "admin") {
    return (
      <DataTableArticle
        data={articles}
        page={setCurrentPage}
        currentPage={currentPage}
      />
    );
  }
  return (
    <Article
      articles={articles}
      page={setCurrentPage}
      currentPage={currentPage}
    />
  );
};

export default page;
