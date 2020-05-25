import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { HeaderRowContext } from "../../contexts/home/Header-row-context";
import Dropdown from "react-dropdown";

const HeadRow = (props) => {
  const router = useRouter();
  const {
    search,
    tags,
    selectedTag,
    sortOptions,
    selectedSortOption,
    setSearch,
    setTags,
    setSelectedTag,
    setLoadData,
    setSelectedSortOption,
  } = useContext(HeaderRowContext);

  // select default tag if one passed via url query
  if (router.query.tag !== undefined) {
    setSelectedTag(tags.filter((tag) => tag.id === router.query.tag));
  }

  const [tmpSearch, setTmpSearch] = useState("");

  return (
    <div className="row top">
      <div className="left col-12 col-md-3 d-flex align-items-center">
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
      </div>
      <div className="middle col-12 col-md-7 d-flex">
        <div className="tag-nav-wrapper d-flex">
          <ul className="tag-nav list-unstyled f-ap-r d-flex">
            {tags.map((tag) => {
              return (
                <li
                  className={`tag-nav-item ${
                    tag.name === selectedTag.name ? "active" : ""
                  }`}
                  key={tag.name}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* .middle */}
      <div className="right col-2 d-none d-md-block">
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
      </div>
      {/* .right */}
      <style jsx>{`
        .top {
          .left,
          .middle,
          .right {
            height: 107px;
            border-right: 1px solid #4e4c4d;
            padding-top: 36px;
            @media (max-width: 991px) {
              height: 65px;
              padding: 15px 0;
            }
            @media (max-width: 767px) {
              border-right: none;
              padding: 0;
            }
          }
          .left {
            @media (max-width: 768px) {
              padding: 0 15px;
            }
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
          }
          .middle {
            padding-left: 20px;
            padding-right: 20px;
            @media (max-width: 767px) {
              padding-left: 15px;
              padding-right: 15px;
            }
            .tag-nav-wrapper {
              overflow: hidden;
              height: 60px;
              margin-top: -5px;
              white-space: nowrap;
              .tag-nav {
                padding-top: 5px;
                padding-bottom: 15px;
                overflow-y: hidden;
                overflow-x: auto;
                &::-webkit-scrollbar {
                  height: 2px;
                }
                /* Track */
                &::-webkit-scrollbar-track {
                  background: #bdbcbcaa;
                }
                /* Handle */
                &::-webkit-scrollbar-thumb {
                  background: #bdbcbc;
                }
                .tag-nav-item {
                  color: #bdbcbc;
                  font-size: 18px;
                  margin: 0 20px;
                  cursor: pointer;
                  position: relative;
                  -webkit-transition: all 0.5s;
                  -moz-transition: all 0.5s;
                  -ms-transition: all 0.5s;
                  -o-transition: all 0.5s;
                  transition: all 0.5s;
                  @media (max-width: 767px) {
                    font-size: 14px;
                  }
                  &:hover {
                    color: #ffffff;
                  }
                  &.active {
                    color: #ffffff;
                  }
                  &:first-of-type {
                    @media (max-width: 767px) {
                      margin-left: 0;
                    }
                  }
                }
              }
            }
            .tag-nav-item:after {
              content: "";
              position: absolute;
              left: 0;
              top: 30px;
              width: 100%;
              height: 2px;
              background: transparent;
              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              -ms-transition: all 0.5s;
              -o-transition: all 0.5s;
              transition: all 0.5s;
            }
            .tag-nav-item.active:after,
            .tag-nav-item:hover:after {
              background: #ffdb00;
            }
          }
          .right {
            padding-left: 30px;
            border: none;
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
          }
        }
      `}</style>
    </div>
  );
};

export default HeadRow;
