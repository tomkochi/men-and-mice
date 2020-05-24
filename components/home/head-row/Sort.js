import { useState, useEffect, useContext } from "react";
import Dropdown from "react-dropdown";
import { HeaderRowContext } from "../../../contexts/home/Header-row-context";

const Sort = () => {
  const { sortOptions, selectedSortOption, setSelectedSortOption } = useContext(
    HeaderRowContext
  );
  return (
    <>
      <div className="sort d-flex">
        <span className="f-cap-r mr-2">Sort by: </span>
        <Dropdown
          options={sortOptions}
          value={selectedSortOption}
          onChange={(e) => setSelectedSortOption(e.value)}
          className="sort-dropdown f-cap-b"
          menuClassName="sortby"
        />
      </div>
      <style jsx>{`
        .sort {
          color: #bdbcbc;
          font-size: 18px;
          position: relative;
          span {
            @media (max-width: 1390px) {
              display: none;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Sort;
