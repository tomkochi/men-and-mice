import { useContext, useEffect, useState } from "react";
import { HeaderRowContext } from "../../../contexts/home/Header-row-context";

const Search = () => {
  const { search, setSearch } = useContext(HeaderRowContext);
  const [tmpSearch, setTmpSearch] = useState("");

  return (
    <>
      <input
        type="text"
        className="search form-control f-cap-r"
        value={tmpSearch}
        onKeyDown={(e) => {
          if (e.key === "Enter") setSearch(tmpSearch);
        }}
        onChange={(e) => setTmpSearch(e.target.value)}
        placeholder="Search for an article"
      />
      <style jsx>{`
        .search {
          font-size: 18px;
          color: #bdbcbc;
          background: url(/img/search.svg) no-repeat transparent;
          background-position: left center;
          border: none;
          outline: none;
          padding-left: 43px;
          padding-top: 9px;
          margin-top: -45px;
          @media (max-width: 992px) {
            margin-top: 0;
          }
          @media (max-width: 767px) {
            font-size: 14px;
          }
          &::-webkit-input-placeholder {
            /* Edge */
            color: #bdbcbc;
          }

          &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #bdbcbc;
          }

          &::placeholder {
            color: #bdbcbc;
          }
        }
      `}</style>
    </>
  );
};

export default Search;
