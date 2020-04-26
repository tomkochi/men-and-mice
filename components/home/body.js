import "../../public/css/bootstrap.css";
import "../../scss/home/body.scss";

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
    </section>
  );
};

export default Body;
