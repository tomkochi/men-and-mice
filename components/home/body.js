const Body = () => {
  return (
    <section className="body">
      <div className="row top">
        <div className="left col-12 col-md-3">
          <input
            type="text"
            className="search form-control f-cap-r"
            placeholder="Search for an article"
          />
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 d-flex">
          <div className="body-nav-wrapper d-flex">
            <ul className="body-nav list-unstyled f-ap-r d-flex">
              <li className="body-nav-item active">All</li>
              <li className="body-nav-item">Networking</li>
              <li className="body-nav-item">Business</li>
              <li className="body-nav-item">Men&amp;Mice</li>
              <li className="body-nav-item">Events</li>
              <li className="body-nav-item">Courses</li>
            </ul>
          </div>
        </div>
        {/* .middle */}

        <div className="right col-2 d-none d-md-block">
          <div className="sort">
            <span className="f-cap-r d-none d-lg-inline-block mr-2">
              Sort by:{" "}
            </span>
            <button className="sort-button f-cap-b" type="button">
              Newest <img src="/img/caret-down-grey.svg" className="ml-1" />
              <ul className="sortby list-unstyled">
                <li className="sort-item">Most popular</li>
                <li className="sort-item">Newest</li>
                <li className="sort-item">Oldest</li>
              </ul>
            </button>
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .top */}

      <div className="row blog">
        <div className="left col-3">
          <div>
            <div className="label f-ap-m">THIS WEEKS POST</div>
            <div className="date">February 24th 2020</div>
          </div>
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 network-security">
          <div className="d-flex align-items-center">
            <div className="for-image-gap">
              <div></div>
            </div>
            <div>
              <h4>Network Security</h4>
              <div className="title">
                <h3>Working from 127.0.0.1</h3>
                <h3 className="with-underline">Working from 127.0.0.1</h3>
              </div>
            </div>
          </div>
          <img src="img/Security-Blog-Icon.svg" alt="" />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read{" "}
            <svg
              className="ml-2"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 11L6 6L1 1" stroke="#757575" stroke-width="2" />
            </svg>
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .blog */}

      <div className="row blog">
        <div className="left col-3">
          <div className="date">February 12th 2020</div>
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 cloud">
          <div className="d-flex">
            <div className="for-image-gap">
              <div></div>
            </div>
            <div>
              <h4>Cloud</h4>
              <div className="title">
                <h3>
                  Men&amp;Mice Suite 9.3 feature highlight: Akamai Fast DNS
                  integration
                </h3>
                <h3 className="with-underline">
                  Men&amp;Mice Suite 9.3 feature highlight: Akamai Fast DNS
                  integration
                </h3>
              </div>
            </div>
          </div>
          <img src="img/Cloud-Blog-Icon.svg" alt="" />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read{" "}
            <svg
              className="ml-2"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 11L6 6L1 1" stroke="#757575" stroke-width="2" />
            </svg>
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .blog */}

      <div className="row blog">
        <div className="left col-3">
          <div className="date">February 2nd 2020</div>
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 men-and-mice">
          <div className="d-flex">
            <div className="for-image-gap">
              <div></div>
            </div>
            <div>
              <h4>Men&amp;Mice</h4>
              <div className="title">
                <h3>Change is our constant; innovation is our tradition</h3>
                <h3 className="with-underline">
                  Change is our constant; innovation is our tradition
                </h3>
              </div>
            </div>
          </div>
          <img src="img/men-and-mice.png" className="photo" alt="" />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read{" "}
            <svg
              className="ml-2"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 11L6 6L1 1" stroke="#757575" stroke-width="2" />
            </svg>
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .blog */}

      <div className="row blog">
        <div className="left col-3">
          <div className="date">February 12th 2020</div>
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 api-auto-rest">
          <div className="d-flex">
            <div className="for-image-gap">
              <div></div>
            </div>
            <div>
              <h4>
                API<span></span>Automation<span></span>REST
              </h4>
              <div className="title">
                <h3>
                  IP infrastructure automation in action: the REST(ful) API
                </h3>
                <h3 className="with-underline">
                  IP infrastructure automation in action: the REST(ful) API
                </h3>
              </div>
            </div>
          </div>
          <img src="img/Server-Blog-Icon.svg" alt="" />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read{" "}
            <svg
              className="ml-2"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 11L6 6L1 1" stroke="#757575" stroke-width="2" />
            </svg>
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .blog */}

      <style jsx>{`
        .body {
          padding-bottom: 35px;
          .top {
            .left,
            .middle,
            .right {
              height: 107px;
              border-right: 1px solid #4e4c4d;
              padding-top: 36px;
              @media (max-width: 991px) {
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
              .body-nav-wrapper {
                overflow: hidden;
                .body-nav {
                  padding-top: 5px;
                  padding-bottom: 15px;
                  overflow-y: hidden;
                  overflow-x: auto;
                  .body-nav-item {
                    color: rgba(255, 255, 255, 0.6);
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
              .body-nav-item:after {
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
              .body-nav-item.active:after,
              .body-nav-item:hover:after {
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
                .sort-button {
                  color: #ffffff;
                  font-size: 18px;
                  border: none;
                  background: transparent;
                  padding: 0;

                  .sortby {
                    opacity: 0;
                    height: 0;
                    overflow: hidden;
                    position: absolute;
                    left: 0;
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
                  }
                  &:hover {
                    .sortby {
                      opacity: 1;
                      height: auto;
                      padding: 12px 0;
                      .sort-item {
                        padding: 12px;
                        background: #ffffff;
                        &:hover {
                          background: #d1d1d1;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          // BOTTOM PART STARTS HERE
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
              h4 {
                font-family: "Apercu Regular";
                font-size: 12px;
                color: #ffdb00;
                text-transform: uppercase;
                margin-bottom: 12px;
                span {
                  display: inline-block;
                  width: 20px;
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
        }
      `}</style>
    </section>
  );
};

export default Body;
