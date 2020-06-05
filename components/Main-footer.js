import { useRouter } from "next/router";
import Link from "next/link";

const Footer = (props) => {
  const router = useRouter();
  const { yellowfooter } = props;

  return (
    <>
      <div className={`footer ${yellowfooter ? "yellow" : ""}`}>
        <div className="container d-md-flex">
          <div className="logo">
            <Link href="/" passHref>
              <a className="navbar-brand">
                <img
                  src={`/img/${
                    yellowfooter
                      ? "logo-two-lines-black.svg"
                      : "logo-two-lines-white.svg"
                  }`}
                  width="138"
                  alt=""
                />
              </a>
            </Link>
          </div>
          {/* .logo */}
          <div className="d-flex w-100 justify-content-between">
            <div className="products">
              <h4>Products</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Core Operations
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Automation
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Security
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Cloud
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            {/* .products */}

            <div className="support">
              <h4>Support</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Technical Support
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Professional Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Product Documentation
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Customer Portal
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    DIG Server Analyzer
                  </a>
                </li>
              </ul>
            </div>
            {/* .support */}

            <div className="training">
              <h4>Training</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Private Training
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Certification Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* .training */}

            <div className="resources">
              <h4>Resources</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    The Mousepad
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Podcast
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    DIG Analyzer
                  </a>
                </li>
              </ul>
            </div>
            {/* .resources */}

            <div className="lets-talk">
              <h4>Lets Talk</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    info@menandmice.com
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    +1 800 616 3840
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    +354 412 1500
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Open Positions
                  </a>
                </li>
              </ul>
            </div>
            {/* .lets-talk */}
          </div>
        </div>

        <div className="container social">
          <div className="d-flex">
            <a href="#" className="follow">
              {yellowfooter ? (
                <img src="/img/facebook.svg" alt="" />
              ) : (
                <img src="/img/facebook-white.svg" alt="" />
              )}
            </a>
            <a href="#" className="follow">
              {yellowfooter ? (
                <img src="/img/linked-in.svg" alt="" />
              ) : (
                <img src="/img/linked-in-white.svg" alt="" />
              )}
            </a>
            <a href="#" className="follow">
              {yellowfooter ? (
                <img src="/img/youtube.svg" alt="" />
              ) : (
                <img src="/img/youtube-white.svg" alt="" />
              )}
            </a>
            <a href="#" className="follow">
              {yellowfooter ? (
                <img src="/img/twitter.svg" alt="" />
              ) : (
                <img src="/img/twitter-white.svg" alt="" />
              )}
            </a>
          </div>
        </div>
        <div className="copyright">Copyright &copy; 2020 men&amp;mice</div>
      </div>

      <style jsx>{`
        .footer {
          background: #282426;
          padding: 90px 0;
          &.yellow {
            background: #ffdb00;
            .container {
              h4 {
                color: #221f20;
              }
              ul li a,
              h4 {
                color: #221f20;
              }
            }
            .copyright {
              color: #221f20;
            }
          }
          .container {
            width: calc(100vw - 100px);
            max-width: 1300px;
            margin: 0 auto;
            @media (max-width: 768px) {
              max-width: calc(100vw - 55px);
            }
            .logo {
              margin-right: 210px;
              margin-bottom: 30px;
              @media (max-width: 840px) {
                margin-right: 60px;
              }
            }
            .navigation {
              margin-right: 130px;
              margin-bottom: 30px;
              @media (max-width: 840px) {
                margin-right: 60px;
              }
            }
            h4 {
              color: white;
              font-size: 14px;
              font-family: "Apercu Bold";
              text-transform: uppercase;
            }
            ul {
              li {
                a {
                  font-family: "Apercu Regular";
                  font-size: 14px;
                  color: white;
                  opacity: 0.6;
                  text-decoration: none;
                  -webkit-transition: all time;
                  -moz-transition: all 0.5s;
                  -ms-transition: all 0.5s;
                  -o-transition: all 0.5s;
                  transition: all 0.5s;
                  position: relative;
                  &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background: white;
                    opacity: 0.6;
                    -webkit-transition: width 0.5s ease-in;
                    -moz-transition: width 0.5s ease-in;
                    -ms-transition: width 0.5s ease-in;
                    -o-transition: width 0.5s ease-in;
                    transition: width 0.5s ease-in;
                  }
                  &:hover:after {
                    width: 100%;
                  }
                }
              }
            }
          }
          .social {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 80px;

            .follow {
              width: 40px;
              height: 40px;
              border: 1px solid rgba(34, 31, 32, 0.2);
              -webkit-border-radius: 20px;
              -moz-border-radius: 20px;
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 12px;
              position: relative;
              @media (max-width: 768px) {
                margin-left: 0;
                margin-right: 20px;
              }
            }
          }
          .copyright {
            font-family: "Apercu Regular";
            font-size: 14px;
            color: white;
            text-transform: uppercase;
            text-align: center;
            margin-top: 25px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
