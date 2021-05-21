import { useState } from "react";

export function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  function switchPages(e) {
    if (e.target.name === "forward") {
      setCurrentPage(currentPage + 1);
    } else if (e.target.name === "back") {
      setCurrentPage(currentPage - 1);
    }
  }
  return {
    currentPage,
    switchPages,
  };
}
