const BottomPick = ({ props }) => {
  const { category, heading, text, imageText, image } = props;
  return (
    <>
      <section className="bottom-pick">
        <div className="container">
          <div className="feature d-flex justify-content-between align-items-center">
            <div className="wrapper">
              <div className="texts">
                <h3 className="f-ap-r">{category}</h3>
                <h2 className="f-ap-b">
                  {heading}
                  <span>.</span>
                </h2>
                {text && <p className="f-ap-l">{text}</p>}
              </div>
              {/* /.texts */}
            </div>
            {/* /.wrapper */}

            <div className="wrapper">
              <div className="image">
                <img src={image} />
                <div className="image-overlay f-ap-r">
                  {imageText}
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53059 4.36845L15.2685 4.36846M15.2685 4.36846L15.2685 13.1063M15.2685 4.36846L5.36844 14.2675"
                      stroke="#221F20"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              {/* /.image */}
            </div>
            {/* /.wrapper */}
          </div>
          {/* /.feature */}
        </div>
        {/* /.container */}
      </section>
      <style jsx>{`
        section.bottom-pick {
          background: #221f20;
          padding: 110px 0;
          .container {
            .feature {
              .wrapper {
                .texts {
                  max-width: 410px;
                  h3 {
                    font-size: 16px;
                    color: #ffdb00;
                    text-transform: uppercase;
                    margin-bottom: 40px;
                  }
                  h2 {
                    font-size: 64px;
                    line-height: 110%;
                    color: white;
                    padding-bottom: 35px;
                    span {
                      color: #ffdb00;
                    }
                  }
                  p {
                    font-size: 24px;
                    color: white;
                  }
                }
                .image {
                  position: relative;
                  &:after {
                    content: "";
                    position: absolute;
                    display: block;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    background: url("/img/dot-over-image.png");
                    opacity: 0.4;
                  }
                  img {
                    width: 100%;
                    height: 640px;
                    object-fit: cover;
                  }
                  .image-overlay {
                    font-size: 17px;
                    color: #221f20;
                    text-transform: uppercase;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background: #ffdb00;
                    padding: 38px 40px 31px;
                    cursor: pointer;
                    svg {
                      margin-left: 39px;
                    }
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default BottomPick;
