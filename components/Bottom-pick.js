const BottomPick = (props) => {
  const {
    title,
    category,
    description,
    link_name,
    url,
    image,
  } = props.data.primary

  return (
    <>
      <section className="bottom-pick">
        <div className="container">
          <div className="feature d-flex justify-content-between align-items-center">
            <div className="wrapper">
              <div className="texts">
                <h3 className="f-ap-r">{category}</h3>
                <h2 className="f-ap-b">
                  {title[0].text}
                  <span>.</span>
                </h2>
                {description && <p className="f-ap-l">{description}</p>}
              </div>
              {/* /.texts */}
            </div>
            {/* /.wrapper */}

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
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </a>
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
          background: #ffdb00;
          padding: 110px 0;
          &:hover {
            .container {
              .feature {
                .wrapper {
                  .texts {
                    h2 {
                      color: #442acc;
                      span {
                        color: #221f20;
                      }
                    }
                  }
                }
              }
            }
          }
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
                    color: #221f20;
                    padding-bottom: 35px;
                    transition: color 0.3s;
                    span {
                      color: #442acc;
                      transition: color 0.3s;
                    }
                  }
                  p {
                    font-size: 24px;
                    color: #221f20;
                  }
                }
                .image {
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
                    transition: opacity 0.3s;
                  }
                  &:hover {
                    &:after {
                      opacity: 0;
                    }
                    .image-overlay {
                      background: #221f20;
                    }
                  }
                  img {
                    width: 100%;
                    height: 640px;
                    object-fit: cover;
                  }
                  .image-overlay {
                    font-size: 17px;
                    color: white;
                    text-transform: uppercase;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background: #442acc;
                    padding: 38px 40px 31px;
                    cursor: pointer;
                    z-index: 600;
                    transition: background 0.3s;
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

BottomPick.defaultProps = {
  data: {
    primary: {
      title: [{ text: 'This is a default title' }],
      category: 'Case Study',
      description:
        'Knowing who did what, when and where on the network helps network and cyber security teams',
      link_name: 'Link comes here',
      url: '#',
      image: {
        url:
          'https://images.prismic.io/men-mice/0890f571-aa8e-4548-9c3b-fe99af610ade_feature-1.png?auto=compress,format',
      },
    },
  },
}

export default BottomPick
