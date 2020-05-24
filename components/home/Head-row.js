import Search from "./head-row/Search";
import Tags from "./head-row/Tags";
import Sort from "./head-row/Sort";
import { useContext } from "react";
import { HeaderRowContext } from "../../contexts/home/Header-row-context";
import Axios from "axios";

const HeadRow = () => {
  const { setTags } = useContext(HeaderRowContext);
  Axios.get(
    "https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/tags/?key=693902285ff27989f7ad281cd8"
  ).then((res) => {
    const tags = res.data.tags.map((t) => {
      return {
        name: t.name,
        id: t.id,
      };
    });

    setTags([{ name: "All", id: "All" }, ...tags]);
  });
  return (
    <div className="row top">
      <div className="left col-12 col-md-3 d-flex align-items-center">
        <Search />
      </div>
      <div className="middle col-12 col-md-7 d-flex">
        <Tags />
      </div>
      {/* .middle */}
      <div className="right col-2 d-none d-md-block">
        <Sort />
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
          }
          .middle {
            padding-left: 20px;
            padding-right: 20px;
            @media (max-width: 767px) {
              padding-left: 15px;
              padding-right: 15px;
            }
          }
          .right {
            padding-left: 30px;
            border: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeadRow;
