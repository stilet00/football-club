import { useState } from "react";

export function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  function goForward() {
    setCurrentPage(currentPage + 1);
  }
  function goBack() {
    setCurrentPage(currentPage - 1);
  }
  return {
    currentPage,
    goForward,
    goBack
  };
}
