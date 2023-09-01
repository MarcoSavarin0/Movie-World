/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export const ButtonPage = ({ page, handlePageRed, handlePageAdd, totalPages }) => {
  return (
    <div className="buttons-page">
      {page >= 2 && (
        <button type="button" onClick={() => handlePageRed(1)}>
          PREVIOUS
        </button>
      )}

      {totalPages > page && (
        <button type="button" onClick={() => handlePageAdd(1)}>
          NEXT
        </button>
      )}
    </div>
  );
}
