const Features = () => {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="feature d-flex justify-content-between align-items-center">
            <div className="wrapper">
              <div className="texts">
                <h2 className="f-ap-b">
                  Customers First<span>.</span>
                </h2>
                <p className="f-ap-l">
                  Knowing who did what, when and where on the network helps
                  network and cyber security teams.
                </p>
              </div>
              {/* /.texts */}
            </div>
            {/* /.wrapper */}

            <div className="wrapper">
              <div className="image">
                <img src="/img/feature-1.png" />
                <div className="image-overlay f-ap-r">
                  Professional Services
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
        section.features {
          background: white;
          padding: 120px 0;
          .container {
            .feature {
              .wrapper {
                width: calc(50% - 45px);
                .texts {
                  max-width: 410px;
                  h2 {
                    font-size: 64px;
                    line-height: 110%;
                    color: #221f20;
                    margin-bottom: 30px;
                    span {
                      color: #442acc;
                    }
                  }
                  p {
                    font-size: 20px;
                    color: #221f20;
                  }
                }
                .image {
                  max-width: 605px;
                  position: relative;
                  img {
                    width: 100%;
                    height: 700px;
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

export default Features;
