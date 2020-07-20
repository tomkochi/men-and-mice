const { default: Link } = require('next/link')

const GetInTouch = (props) => {
  return (
    <>
      <div className="get-in-touch">
        <div className="container">
          <div className="wrapper d-flex justify-content-between align-items-center">
            <h2 className="f-ap-b">
              Dont hestiate to shoot us a Question<span>.</span>
            </h2>
            <Link href="/" passHref>
              <a className="f-ap-m">
                Get in touch
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53059 4.36839L15.2685 4.3684M15.2685 4.3684L15.2685 13.1063M15.2685 4.3684L5.36844 14.2674"
                    stroke="#ffffff"
                    stroke-width="2"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .get-in-touch {
          background: #ffdb00;
          .wrapper {
            height: 100vh;
            h2 {
              font-size: 52px;
              line-height: 105%;
              color: #221f20;
              max-width: 420px;
              span {
                color: #442acc;
              }
            }
            a {
              padding: 30px 34px 24px;
              background: #442acc;
              color: white;
              font-size: 17px;
              text-transform: uppercase;
              text-decoration: none;
              transition: 0.3s ease;
              svg {
                margin-left: 29px;
              }
              &:hover {
                background: #221f20;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default GetInTouch
