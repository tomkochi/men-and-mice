import { useContext, useEffect, useState } from "react";
import Blog from "./Blog";
import HeadRow from "./Head-row";
import { BlogsContext } from "../../contexts/home/blogs-context";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";
import { HeaderRowContext } from "../../contexts/home/Header-row-context";

const Body = () => {
  const { blogs, setBlogs, page, setPage } = useContext(BlogsContext);
  const { search, selectedTag, selectedSortOption } = useContext(
    HeaderRowContext
  );
  const [nextPage, setNextPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const fetchData = (refresh) => {
    if (fetching) return;
    setFetching(true);
    let sortString;
    switch (selectedSortOption) {
      case "Newest":
        sortString = "order=published_at DESC";
        break;
      case "Oldest":
        sortString = "order=published_at ASC";
        break;
      default:
        break;
    }
    const urlString = `https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/posts/?key=693902285ff27989f7ad281cd8&include=tags&fields=id,title,slug,feature_image,published_at&limit=5&page=${
      refresh ? 1 : page + 1
    }${
      selectedTag.name === "All" ? "" : `&filter=tags.id:${selectedTag.id}`
    }&${sortString}`;

    Axios.get(encodeURI(urlString))
      .then((res) => {
        setPage(refresh ? 1 : page + 1);
        setBlogs(refresh ? [...res.data.posts] : [...blogs, ...res.data.posts]);
        setNextPage(res.data.meta.pagination.next);
      })
      .catch((e) => {})
      .finally(() => {
        setFetching(false);
      });
  };

  useEffect(() => {
    fetchData(true);
  }, [selectedTag, selectedSortOption]);
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
