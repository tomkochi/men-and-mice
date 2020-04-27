import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (router.pathname === "/") {
    return <></>;
  }
  return (
    <>
      <div className="footer">
        <div className="container d-md-flex">
          <div className="logo">
            <a className="navbar-brand" href="#">
              <img src="/img/logo-black.svg" alt="" />
            </a>
          </div>
          {/* .logo */}
          <div className="navigation">
            <h4>Navigation</h4>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Why us?
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          {/* .navigation */}
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
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          {/* .support */}
        </div>
        <div className="container social">
          <h4>Follow us</h4>
          <div className="d-flex">
            <a href="#" className="follow">
              <img src="/img/facebook.svg" alt="" />
            </a>
            <a href="#" className="follow">
              <img src="/img/linked-in.svg" alt="" />
            </a>
            <a href="#" className="follow">
              <img src="/img/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: #ffdb00;
          padding: 90px 0 150px 0;
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
              color: #221f20;
              opacity: 0.3;
              font-size: 14px;
              font-family: "Apercu Regular";
            }
            ul {
              li {
                a {
                  font-family: "Apercu Bold";
                  font-size: 18px;
                  color: #221f20;
                  opacity: 1;
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
                    background: #221f20;
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
            justify-content: flex-end;
            @media (max-width: 768px) {
              display: block;
            }
            h4 {
              margin-right: 12px;
              @media (max-width: 768px) {
                margin-top: 30px;
              }
            }
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
              &:after,
              &:before {
                content: "";
                position: absolute;
                left: -1px;
                top: -1px;
                width: 40px;
                height: 40px;
                border: 1px solid rgba(34, 31, 32, 0.2);
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                border-radius: 20px;
              }
              &:hover:after {
                -webkit-transition: all 0.5s ease-in;
                -moz-transition: all 0.5s ease-in;
                -ms-transition: all 0.5s ease-in;
                -o-transition: all 0.5s ease-in;
                transition: all 0.5s ease-in;
                -webkit-transform: scale(1.75);
                -moz-transform: scale(1.75);
                -ms-transform: scale(1.75);
                -o-transform: scale(1.75);
                transform: scale(1.75);
                opacity: 0;
              }
              &:hover:before {
                -webkit-transition: all 0.5s ease-in 0.25s;
                -moz-transition: all 0.5s ease-in 0.25s;
                -ms-transition: all 0.5s ease-in 0.25s;
                -o-transition: all 0.5s ease-in 0.25s;
                transition: all 0.5s ease-in 0.25s;
                -webkit-transform: scale(1.75);
                -moz-transform: scale(1.75);
                -ms-transform: scale(1.75);
                -o-transform: scale(1.75);
                transform: scale(1.75);
                opacity: 0;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
