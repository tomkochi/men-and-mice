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
            <button
              className="btn sort-button f-cap-b"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Newest <img src="/img/caret-down-grey.svg" className="ml-2" />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .top */}

      <div className="row bottom">
        <div className="left col-3">
          <div>
            <button className="this-weeks-post mb-2 f-ap-m">
              THIS WEEKS POST
            </button>
            <div className="date">February 24th 2020</div>
          </div>
        </div>
        {/* .left */}
        <div className="middle col-12 col-md-7 network-security">
          <div className="d-flex">
            <div className="for-image-gap">
              <div></div>
            </div>
            <div>
              <h4>Network Security</h4>
              <h3>Working from 127.0.0.1</h3>
            </div>
          </div>
          <img src="img/network-security.svg" alt="" style={{ opacity: 0.4 }} />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read <img src="/img/caret-right-grey.svg" className="ml-2" />
          </div>
        </div>
        {/* .right */}

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
              <h3>
                Men&amp;Mice Suite 9.3 feature highlight: Akamai Fast DNS
                integration
              </h3>
            </div>
          </div>
          <img src="img/cloud.svg" alt="" style={{ opacity: 0.4 }} />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read <img src="/img/caret-right-grey.svg" className="ml-2" />
          </div>
        </div>
        {/* .right */}

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
              <h3>Change is our constant; innovation is our tradition</h3>
            </div>
          </div>
          <img src="img/men-and-mice.png" className="png" alt="" />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read <img src="/img/caret-right-grey.svg" className="ml-2" />
          </div>
        </div>
        {/* .right */}

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
              <h3>IP infrastructure automation in action: the REST(ful) API</h3>
            </div>
          </div>
          <img src="img/api-automation-rest.svg" alt="" />
        </div>
        {/* .middle */}
        <div className="right col-2">
          <div className="read-link">
            Read <img src="/img/caret-right-grey.svg" className="ml-2" />
          </div>
        </div>
        {/* .right */}
      </div>
      {/* .bottom */}
      <style jsx>{`
        .body {
          padding-bottom: 35px;
          .top {
            .left,
            .middle,
            .right {
              padding: 46px 0;
              border-right: 1px solid #4e4c4d;
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
                padding-left: 35px;
                @media (max-width: 767px) {
                  font-size: 14px;
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
                    @media (max-width: 767px) {
                      font-size: 14px;
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
              padding-left: 25px;
              border: none;
              .sort {
                color: #bdbcbc;
                font-size: 18px;
                .sort-button {
                  color: #ffffff;
                  font-size: 18px;
                  border: none;
                  background: transparent;
                  padding: 0;
                }
              }
            }
          }

          // BOTTOM STARTS HERE
          .bottom {
            .left,
            .middle,
            .right {
              border-top: 1px solid #4e4c4d;
              display: flex;
              flex-direction: column;
              justify-content: center;
              min-height: 358px;
              @media (max-width: 767px) {
                min-height: 278px;
              }
            }
            .left {
              padding: 0;
              @media (max-width: 767px) {
                display: none;
              }
              button.this-weeks-post {
                border: none;
                height: 29px;
                background-color: #ffdb00;
                color: #221f20;
                font-size: 12px;
              }
              .date {
                font-family: "Capitolium Regular";
                color: #b7b6b6;
                font-size: 20px;
              }
            }
            .right {
              text-align: center;
              @media (max-width: 767px) {
                display: none;
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
                height: 100%;
                @media (max-width: 991px) {
                  width: 140px;
                }
              }
              img {
                position: absolute;
                left: -58px;
                @media (max-width: 991px) {
                  width: 130px;
                  left: -38px;
                }
                &.png {
                  left: 0;
                  width: 180px;
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
                span {
                  display: inline-block;
                  width: 20px;
                }
              }
              h3 {
                font-family: "Apercu Bold";
                font-size: 36px;
                color: #ffffff;

                @media (max-width: 991px) {
                  font-size: 28px;
                }
                @media (max-width: 767px) {
                  font-size: 20px;
                }
              }
            }
            .right {
              .read-link {
                font-family: "Capitolium Bold";
                font-size: 20px;
                color: #b7b6b6;
                cursor: pointer;
                img {
                  -webkit-transition: all 0.5s;
                  -moz-transition: all 0.5s;
                  -ms-transition: all 0.5s;
                  -o-transition: all 0.5s;
                  transition: all 0.5s;
                }
                &:hover img {
                  -webkit-transform: translateX(20px);
                  -moz-transform: translateX(20px);
                  -ms-transform: translateX(20px);
                  -o-transform: translateX(20px);
                  transform: translateX(20px);
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
