const Body = () => {
  return (
    <>
      <div className="body">
        <div className="head">
          <div className="wrapper">
            <a href="#" className="text-decoration-none">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25 11.7502L2 6.50024L7.25 1.25024"
                  stroke="#FFDB00"
                  stroke-width="2"
                />
              </svg>
              Articles
            </a>
            <h2>network security</h2>
            <h1>Working from 127.0.0.1</h1>
            <p>
              As the COVID-19 pandemic sweeps across the world, we thought we’d
              take a quick look at the famed localhost, and share some best
              practices for working from home.
            </p>
          </div>
          {/* .wrapper */}
          <img src="/img/network-security.svg" className="post-image" alt="" />
        </div>
        {/* .head */}
        <div className="content">
          <div className="wrapper">
            <p>
              As the COVID-19 pandemic sweeps across the world, lots of people
              are just discovering the concept of remote work. We thought we’d
              take a quick look at the famed localhost of 127.0.0.1 and ::1, and
              share some best practices from the Men&Mice team on how to make
              the best out of working from home.
            </p>
            <p>Or 127.0.0.1 (::1 for the IPv6-minded), as it were.</p>
            <h4>Localhost where the heart is</h4>
            <p>
              It’s a true testament to how slowly things move in our industry
              when you consider that the name of localhost has been introduced
              in 1996, but only achieved ‘standard’ status in 2013. The standard
              of IPv4 reserves all 16 million addresses (give or take) of the
              127.0.0.0/8 range for loopback. In IPv6, it’s only a single one:
              ::1. (Read more about IPv6 reserved addresses here.) In IPv4,
              127.0.0.1 is the default that most computers use: in the hosts
              file (/etc/hosts in Linux and Mac systems;
              C:\Windows\System32\drivers\etc\hosts on Windows), which acts as a
              local DNS resolver is usually empty except for these two lines:
            </p>
            <code>
              <ol>
                <li>{`def rule(Hodor,y){`}</li>
                <li>{` rule()`}</li>
                <li>{`}`}</li>
                <li>{`var Sansa = COLS`}</li>
                <li>{`def TABLE[-Jon][i] {`}</li>
                <li>{` (rule(-TABLE[ROWS][y]) * --(Jon) / 1 * ((`}</li>
                <li>{`foo(Jon, TABLE[0.52][-COLS])))) + -33;`}</li>
                <li>{` Arya += betray(Sansa,-COLS * -COLS) - -38 `}</li>
                <li>{`}`}</li>
              </ol>
            </code>
            <p>
              It is defined locally, as the loopback addresses shouldn’t be sent
              to public name servers to avoid confusion. Because of its special
              status, even machines without an actual network interface (wired
              or wireless connections, or even the hardware capability for
              connections) can still use localhost through the networking stack
              of the operating system. Air gapped computers can run network
              services (such as web servers like Apache or nginx) locally.
            </p>
            <h4>127.0.0.1 or localhost?</h4>
            <p>
              In most cases: either work. There’s one notable case where the two
              are different: when using a MySQL server, it does matter whether
              using 127.0.0.1 or localhost in your preferences.
            </p>
            <h4>Working from 127.0.0.1 (::1)</h4>
            <p>
              Men&Mice is fortunate in being able to encourage employees to work
              from home. The health and safety of our people are our highest
              priorities at all times. Working remotely, however, is a tricky
              situation. Even under the best of circumstances it creates a
              disruption, and can take a heavy toll on mental health and
              productivity. Our team members aren’t strangers to remote work,
              but even for them, this is new. When the benefit of an optional
              change of scenery becomes the new status quo that is recommended
              or even mandated, being smart is essential. We’ve asked the
              Men&Mice team to share their tips and best practices — hope this
              helps all of you struggling to adjust to the new situation.
            </p>
            <ul className="tags list-unstyled d-flex">
              <li>
                <a href="#">Home Network</a>
              </li>
              <li>
                <a href="#">DHCP</a>
              </li>
              <li>
                <a href="#">127.0.0.1</a>
              </li>
            </ul>
          </div>
          {/* .wrapper */}
        </div>
        {/* content */}
        <div className="footer">
          <div className="wrapper">
            <h3>Enjoyed the article?</h3>
            <button className="read-more">
              READ MORE <img src="/img/caret-right-black.png" alt="" />
            </button>
            <h4>Share on Social Media</h4>
            <div className="social-icons d-flex">
              <div className="icon">
                <img src="/img/facebook.svg" width="20" alt="" />
              </div>
              <div className="icon">
                <img src="/img/twitter.svg" width="20" alt="" />
              </div>
              <div className="icon">
                <img src="/img/linked-in.svg" width="20" alt="" />
              </div>
            </div>
          </div>
          {/* .wrapper */}
        </div>
        {/* .footer */}
      </div>
      {/* .body */}
      <style jsx>{`
        .body {
          .head,
          .content,
          .footer {
            .wrapper {
              width: calc(100vw - 60px);
              max-width: 680px;
              margin: 0 auto;
            }
          }
          .head {
            background: transparent;
            padding: 100px 0 150px 0;
            position: relative;
            .wrapper {
              a {
                font-family: "Apercu Bold";
                font-size: 18px;
                color: #ffffff;
                svg {
                  margin-right: 12px;
                }
              }
              h2 {
                font-family: "Apercu Regular";
                font-size: 12px;
                color: #ffdb00;
                text-transform: uppercase;
                margin: 70px 0 20px 0;
              }
              h1 {
                font-family: "Apercu Bold";
                font-size: 48px;
                color: #ffffff;
                margin-bottom: 35px;
                @media (max-width: 768px) {
                  font-size: 36px;
                }
              }
              p {
                font-family: "Capitolium Regular";
                font-size: 20px;
                color: #ffffff;
              }
            }
            .post-image {
              position: absolute;
              left: 50%;
              bottom: 0;
              -webkit-transform: translate(-50%, 50%);
              -moz-transform: translate(-50%, 50%);
              -ms-transform: translate(-50%, 50%);
              -o-transform: translate(-50%, 50%);
              transform: translate(-50%, 50%);
              width: 100%;
              max-width: 680px;
              max-height: 250px;
              @media (max-width: 768px) {
                max-width: 160px;
                max-height: 250px;
              }
            }
          }
          .content {
            background: #ffffff;
            border: none !important;
            .wrapper {
              color: #221f20;
              padding: 155px 0;
              p {
                font-family: "Capitolium Regular";
                font-size: 20px;
              }
              h4 {
                font-family: "Apercu Bold";
                font-size: 26px;
                margin-top: 70px;
                margin-bottom: 40px;
              }
              code {
                display: flex;
                margin: 70px 0;
                width: 100%;
                overflow-x: scroll;
                background: #f2f2f2;
              }
              ol {
                padding: 25px;
                list-style: none;
                counter-reset: li;
                li {
                  font-size: 16px;
                  color: #221f20;
                  padding-left: 25px;
                  counter-increment: li;
                  &::before {
                    content: counter(li, decimal-leading-zero);
                    color: #8e8e8e;
                    margin-right: 25px;
                  }
                }
              }
              .tags {
                margin-top: 70px;
              }
              ul {
                li {
                  a {
                    font-family: "Apercu Bold";
                    font-size: 14px;
                    color: #442acc;
                    margin-right: 35px;
                    text-transform: uppercase;
                    text-decoration: none;
                    position: relative;
                    &:after {
                      content: "";
                      position: absolute;
                      left: 0;
                      bottom: -4px;
                      width: 0;
                      height: 2px;
                      background: #442acc;
                      -webkit-transition: all 0.5s;
                      -moz-transition: all 0.5s;
                      -ms-transition: all 0.5s;
                      -o-transition: all 0.5s;
                      transition: all 0.5s;
                    }
                    &:hover:after {
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
          .footer {
            background: #ffffff;
            text-align: center;
            border: none !important;
            h3 {
              font-family: "Apercu Bold";
              font-size: 36px;
              margin-bottom: 30px;
            }
            button {
              font-family: "Apercu Medium";
              font-size: 18px;
              width: 190px;
              height: 75px;
              border: none;
              background: #ffdb00;
              img {
                margin-left: 15px;
              }
            }
            h4 {
              font-family: "Apercu Regular";
              font-size: 16px;
              opacity: 0.6;
              margin: 68px 0 20px 0;
            }
            .social-icons {
              display: flex;
              justify-content: center;
              padding-bottom: 110px;
              .icon {
                width: 40px;
                height: 40px;
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                border-radius: 20px;
                border: 1px solid #dfdfdf;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 12px;
                img {
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Body;
