import Link from "next/link";
import moment from "moment";

const Blog = ({ data }) => {
  const ext = () => {
    // get extention from filename
    const re = /(?:\.([^.]+))?$/;
    return re.exec(data.image)[1];
  };

  // const stringSoSlug = (str) => {
  //   str = str.replace(/^\s+|\s+$/g, ""); // trim
  //   str = str.toLowerCase();

  //   // remove accents, swap ñ for n, etc
  //   var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  //   var to = "aaaaeeeeiiiioooouuuunc------";
  //   for (var i = 0, l = from.length; i < l; i++) {
  //     str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  //   }

  //   str = str
  //     .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
  //     .replace(/\s+/g, "-") // collapse whitespace and replace by -
  //     .replace(/-+/g, "-"); // collapse dashes

  //   return str;
  // };

  return (
    <div className="Blog">
      <div className="row blog">
        <div className="left col-3">
          <div>
            {moment(data.published_at).isSame(moment().format(), "week") ? (
              <div className="label f-ap-m">THIS WEEKS POST</div>
            ) : (
              ""
            )}
            <div className="date">
              {moment(data.published_at).format("MMM Do YYYY")}
            </div>
          </div>
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 network-security">
          <div className="d-flex align-items-center">
            <div className="for-image-gap">
              <div></div>
            </div>
            <div>
              <div className="tags d-flex">
                {data.tags.map((tag) => {
                  return (
                    <a href="#" key={tag.id}>
                      {tag.name}
                      <span></span>
                    </a>
                  );
                })}
              </div>
              <div className="title">
                <h3>{data.title}</h3>
                <h3 className="with-underline">{data.title}</h3>
              </div>
            </div>
          </div>
          <img
            src={data.feature_image}
            className={ext() !== "svg" ? "photo" : ""}
            alt=""
          />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <Link href={`/${data.slug}`}>
            <div className="read-link">
              Read
              <svg
                className="ml-2"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 11L6 6L1 1" stroke="#757575" strokeWidth="2" />
              </svg>
            </div>
          </Link>
        </div>
        {/* .right */}
      </div>
      {/* .blog */}

      <style jsx>{`
        .blog {
          cursor: pointer;
          * {
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }
          &:hover {
            .left {
              .date {
                color: #ffffff;
              }
            }
            .middle {
              img {
                opacity: 1;
              }
              .title h3.with-underline {
                opacity: 1;
              }
            }
          }
          .left,
          .middle,
          .right {
            border-top: 1px solid #4e4c4d;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 394px;
            @media (max-width: 767px) {
              min-height: 278px;
            }
          }
          .left {
            padding: 0;
            @media (max-width: 767px) {
              display: none;
            }
            .label {
              display: inline-block;
              padding: 10px 13px 7px 12px;
              line-height: 100%;
              border: none;
              background-color: #ffdb00;
              color: #221f20;
              font-size: 12px;
              margin-bottom: 18px;
            }
            .date {
              font-family: "Capitolium Regular";
              color: #b7b6b6;
              font-size: 20px;
              line-height: 100%;
            }
          }

          .left,
          .middle {
            border-right: 1px solid #4e4c4d;
            @media (max-width: 767px) {
              border-right: none;
            }
          }
          .middle {
            padding-right: 80px;
            overflow: hidden;
            padding-left: 0;
            position: relative;
            @media (max-width: 991px) {
              padding-right: 20px;
            }
            .for-image-gap div {
              width: 250px;
              height: 10px;
              @media (max-width: 991px) {
                width: 140px;
              }
            }
            img {
              position: absolute;
              opacity: 0.4;
              @media (max-width: 991px) {
                width: 130px;
                left: -38px;
              }
              &.photo {
                left: 0;
                width: 210px;
                height: 100%;
                object-fit: cover;
                @media (max-width: 991px) {
                  width: 98px;
                }
              }
            }
            .tags {
              a {
                font-family: "Apercu Regular";
                font-size: 12px;
                color: #ffdb00;
                text-transform: uppercase;
                margin-bottom: 12px;
                text-decoration: none;
                span {
                  display: inline-block;
                  width: 20px;
                }
                &:hover {
                  opacity: 0.4;
                }
              }
            }
            .title {
              position: relative;
              h3 {
                font-family: "Apercu Bold";
                font-size: 36px;
                color: #ffffff;
                padding: 0;
                margin: 0;
                @media (max-width: 991px) {
                  font-size: 28px;
                }
                @media (max-width: 767px) {
                  font-size: 20px;
                }
                &.with-underline {
                  position: absolute;
                  opacity: 0;
                  top: 0;
                  text-decoration: underline;
                  text-decoration-color: #ffdb00;
                }
              }
            }
          }
          .right {
            text-align: center;
            @media (max-width: 767px) {
              display: none;
            }

            .read-link {
              font-family: "Capitolium Bold";
              font-size: 20px;
              color: #b7b6b6;
              cursor: pointer;
              &:hover {
                color: #ffffff;
              }
              svg {
                -webkit-transition: all 0.5s;
                -moz-transition: all 0.5s;
                -ms-transition: all 0.5s;
                -o-transition: all 0.5s;
                transition: all 0.5s;
                margin-top: -4px;
              }
              &:hover svg {
                -webkit-transform: translateX(10px);
                -moz-transform: translateX(10px);
                -ms-transform: translateX(10px);
                -o-transform: translateX(10px);
                transform: translateX(10px);
                path {
                  stroke: #ffdb00;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
