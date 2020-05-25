import { useContext, useEffect, useState } from "react";
import Blog from "./Blog";
import HeadRow from "./Head-row";
import { BlogsContext } from "../../contexts/home/blogs-context";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";
import { HeaderRowContext } from "../../contexts/home/Header-row-context";

const Body = () => {
  const { blogs, setBlogs, page, setPage } = useContext(BlogsContext);
  const { search, selectedTag, loadData, selectedSortOption } = useContext(
    HeaderRowContext
  );
  const [nextPage, setNextPage] = useState(1);

  //api settings
  const sort =
    selectedSortOption == "Newest"
      ? "order=published_at DESC"
      : "order=published_at ASC";

  const fetchApi = true;
  const blogEndpoint = `https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/posts/?key=693902285ff27989f7ad281cd8&include=tags&fields=id,title,slug,feature_image,published_at&limit=5&${sort}`;
  //
  const tagEndpoint = `https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/posts/?key=693902285ff27989f7ad281cd8&include=tags&fields=id,title,slug,feature_image,published_at&limit=5&${sort}&filter=tags.id:${selectedTag.id}`;
  //Api Call for all posts
  const endpoint = selectedTag.id === "All" ? blogEndpoint : tagEndpoint;
  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.posts;
      })
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => console.log(`there was an error ${error}`));
  }, [selectedTag, selectedSortOption]);
  //
  function fetchData() {
    console.log("fetch data called");
  }

  return (
    <section className="body">
      <HeadRow />
      <div className="blogs">
        {blogs
          ? blogs.map((blog, i) => {
              return <Blog data={blog} key={i} />;
            })
          : ""}
      </div>
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={nextPage}
      ></InfiniteScroll>

      <style jsx>{`
        .body {
          padding-bottom: 35px;
        }
      `}</style>
      <style jsx global>{`
        .sort-dropdown {
          color: #ffffff;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          .Dropdown-control {
            position: relative;
            &:after {
              content: "";
              position: absolute;
              right: -20px;
              top: 6px;
              width: 12px;
              height: 12px;
              display: block;
              background: url("/img/caret-down-grey.svg") no-repeat center;
              -webkit-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              -ms-transition: all 0.5s;
              -o-transition: all 0.5s;
              transition: all 0.5s;
            }
          }
          .sortby {
            padding: 12px 0;
            right: 0;
            overflow: hidden;
            position: absolute;
            text-align: left;
            background: #ffffff;
            color: #221f20;
            min-width: 180px;
            z-index: 400;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            .Dropdown-option {
              padding: 12px;
              color: #221f20;
              background: #ffffff;
              &:hover {
                background: #d1d1d1;
              }
            }
          }
          &.is-open {
            .Dropdown-control:after {
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              transform: rotate(180deg);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Body;
