import Link from 'next/link'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link href="/" passHref>
          <a className="navbar-brand">
            <img src="/img/logo-one-line-white.svg" width="203" alt="" />
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
              <Link href="/" passHref>
                <a className="nav-link" href="#">
                  Why us?
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link" href="#">
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/customers" passHref>
                <a className="nav-link">Customers</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" passHref>
                <a className="nav-link" href="\blogs">
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link" href="#">
                  Support
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/" passHref>
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
                      stroke="white"
                      strokeWidth="1.75"
                    />
                    <path
                      d="M1.32593 17.9999L6.73502 12.5908"
                      stroke="white"
                      strokeWidth="1.75"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li className="nav-item pl-3">
              <Link href="/" passHref>
                <a className="nav-link free-trial" href="#">
                  <button>Free trial</button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .header {
          nav {
            padding: 37px 50px;
            background: #221f20;
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
                    content: '';
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
                    background: #ffdb00;
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
                  font-family: 'Apercu Medium';
                  font-size: 18px;
                  color: white !important;
                  @media (max-width: 1055px) {
                    font-size: 16px;
                  }
                  svg * {
                    -webkit-transition: all 0.5s;
                    -moz-transition: all 0.5s;
                    -ms-transition: all 0.5s;
                    -o-transition: all 0.5s;
                    transition: all 0.5s;
                  }
                  &:hover svg * {
                    stroke: #ffdb00;
                  }
                }
                button {
                  font-size: 16px;
                  color: #221f20;
                  padding: 12px 18px;
                  background: #ffdb00;
                  border: none;
                  height: 47px;
                  -webkit-border-radius: 47px;
                  -moz-border-radius: 47px;
                  border-radius: 47px;
                  -webkit-transition: background 0.5s;
                  -moz-transition: background 0.5s;
                  -ms-transition: background 0.5s;
                  -o-transition: background 0.5s;
                  transition: background 0.5s;
                  &:hover {
                    background: white;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </div>
  )
}

export default Header
