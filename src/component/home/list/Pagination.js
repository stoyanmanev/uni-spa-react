import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function getContent(i) {

      return (
        <li key={i} className="page-item mb-2">
          <a onClick={(e) => paginate(e, i)} href="!#" className="page-link">
            {i}
          </a>
        </li>
      );
  }

  return (
    <nav>
      <ul className="pagination flex-wrap">
        {pageNumbers.map((number) => (
            getContent(number)
        ))}
      </ul>
    </nav>
  );
}
