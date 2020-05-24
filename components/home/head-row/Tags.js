import { useState, useEffect, useContext } from "react";
import { HeaderRowContext } from "../../../contexts/home/Header-row-context";

const Tags = () => {
  const { tags, selectedTag, setSelectedTag } = useContext(HeaderRowContext);
  return (
    <>
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
      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default Tags;
