const FeatureImageOnLeft = (props) => {
  const { description, link_name, url, image, title } = props.data.primary

  return (
    <>
      <section className="features">
        <div className="container">
          <div className="feature d-flex justify-content-between align-items-center">
            <div className="wrapper">
              <div className="image">
                <img src={image.url} />
                <a href={url || '#'}>
                  <div className="image-overlay f-ap-r">
                    {link_name}
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
                </a>
              </div>
              {/* /.image */}
            </div>
            {/* /.wrapper */}

            <div className="wrapper">
              <div className="texts">
                <h2 className="f-ap-b">
                  {title[0].text}
                  <span>.</span>
                </h2>
                <p className="f-ap-l">{description}</p>
              </div>
              {/* /.texts */}
            </div>
            {/* /.wrapper */}
          </div>
        </div>
      </section>
      <style jsx>{`
        section.features {
          background: white;
          margin-top: 120px;
          margin-bottom: 120px;
          .container {
            .feature {
              &:first-of-type {
                margin-bottom: 100px;
              }
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
                  &:after {
                    content: '';
                    position: absolute;
                    display: block;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    background: url('/img/dot-over-image.png');
                    opacity: 0.4;
                  }
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
  )
}

export default FeatureImageOnLeft
