import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <Link href="/">
          <a className="navbar-brand" href="#">
            <img src="/img/logo-white.svg" width="240" alt="" />
          </a>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/img/sandwich.svg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav middle">
            <li className="nav-item">
              <a className="nav-link f-ap-m" href="#">
                Why us?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link f-ap-m" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <Link href="/customers" passHref>
                <a className="nav-link f-ap-m">Customers</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link f-ap-m" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link f-ap-m" href="#">
                Support
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 16.3286V7.68164H6.50261V16.3286C6.50261 17.8481 5.27081 19.0799 3.7513 19.0799C2.2318 19.0799 1 17.8481 1 16.3286Z"
                    stroke="#221F20"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.14441 19.08H16.8459C18.9481 19.08 20.6522 17.3759 20.6522 15.2737V1H6.50267V8.99692"
                    stroke="#221F20"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.25378 4.93042H18.2938"
                    stroke="#221F20"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.25378 8.07471H18.2938"
                    stroke="#221F20"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.25378 11.2192H18.2938"
                    stroke="#221F20"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="11.8261"
                    cy="7.73073"
                    rx="2.88462"
                    ry="3.07692"
                    stroke="#221F20"
                    strokeWidth="1.75"
                  />
                  <path
                    d="M20.0985 17.0203C18.0012 14.8575 15.0343 13.5085 11.745 13.5085C8.45571 13.5085 5.48875 14.8575 3.39148 17.0203"
                    stroke="#221F20"
                    strokeWidth="1.75"
                  />
                  <circle
                    cx="11.826"
                    cy="11"
                    r="10"
                    stroke="#221F20"
                    strokeWidth="1.75"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.3713"
                    cy="7.95455"
                    r="6.95455"
                    stroke="#221F20"
                    strokeWidth="1.75"
                  />
                  <path
                    d="M1.32593 17.9999L6.73502 12.5908"
                    stroke="#221F20"
                    strokeWidth="1.75"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item pl-3">
              <a className="nav-link free-trial f-ap-m" href="#">
                <button>Free trial</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .header {
          background: white;
          nav {
            padding: 37px 50px;
            background: white;
            @media (max-width: 1030px) {
              padding: 30px;
            }
            .navbar-brand {
              position: relative;
              z-index: 3000;
            }
            ul {
              &.middle {
                position: absolute;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
                @media (max-width: 1140px) {
                  position: static;
                }
                li {
                  padding: 0 22px;
                  @media (max-width: 1310px) {
                    padding: 0 15px;
                  }
                  @media (max-width: 1230px) {
                    padding: 0 10px;
                  }
                }
              }
              &:first-of-type {
                li a {
                  position: relative;
                  &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: transparent;
                    -webkit-transition: all 0.5s;
                    -moz-transition: all 0.5s;
                    -ms-transition: all 0.5s;
                    -o-transition: all 0.5s;
                    transition: all 0.5s;
                    -webkit-transform: translateY(20px);
                    -moz-transform: translateY(20px);
                    -ms-transform: translateY(20px);
                    -o-transform: translateY(20px);
                    transform: translateY(20px);
                  }
                  &:hover:after {
                    background: #442acc;
                    -webkit-transform: translateY(0);
                    -moz-transform: translateY(0);
                    -ms-transform: translateY(0);
                    -o-transform: translateY(0);
                    transform: translateY(0);
                  }
                }
              }
              li {
                margin-top: auto;
                margin-bottom: auto;
                position: relative;
                text-align: center;
                a {
                  font-size: 18px;
                  color: #221f20 !important;
                  svg * {
                    -webkit-transition: all 0.5s;
                    -moz-transition: all 0.5s;
                    -ms-transition: all 0.5s;
                    -o-transition: all 0.5s;
                    transition: all 0.5s;
                  }
                  &:hover svg * {
                    stroke: #442acc;
                  }
                }
                button {
                  font-size: 16px;
                  color: #221f20;
                  padding: 12px 18px;
                  background: #ffdb00;
                  border: none;
                  -webkit-border-radius: 0;
                  -moz-border-radius: 0;
                  border-radius: 0;
                  -webkit-transition: color 0.5s;
                  -moz-transition: color 0.5s;
                  -ms-transition: color 0.5s;
                  -o-transition: color 0.5s;
                  transition: color 0.5s;
                  &:hover {
                    color: #442acc;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
