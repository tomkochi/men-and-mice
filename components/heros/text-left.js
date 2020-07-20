import Link from 'next/link'

const Hero = ({
  hero,
  tags,
  image,
  signup,
  'register-course': registerCourse,
}) => {
  const tagCount = tags ? tags.length : 0

  const isSvg = image
    ? image
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(-1)[0]
        .toUpperCase() === 'SVG'
    : false

  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="hero-texts col">
            <div className="d-flex">
              {tags &&
                tags.map((t, i) => {
                  return (
                    <>
                      {i === tagCount - 1 ? (
                        <h2 className="f-ap-b">{t}</h2>
                      ) : (
                        <h3 className="f-ap-b">{t}</h3>
                      )}
                      {i !== tagCount - 1 && (
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L5 5.5L1 9.5"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </>
                  )
                })}
            </div>
            <h1 className="f-ap-b">
              {hero}
              <span>.</span>
            </h1>
            {signup && (
              <Link href={signup.url} passHref>
                <a className="f-ap-m">
                  {signup.text}
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.98062L7.17862 14.1592M7.17862 14.1592L13.3572 7.98062M7.17862 14.1592L7.1779 0.15918"
                      stroke="#FFDB00"
                      stroke-width="2"
                    />
                  </svg>
                </a>
              </Link>
            )}
            {registerCourse && (
              <Link href={registerCourse.url} passHref>
                <a className="f-ap-m">
                  {registerCourse.text}
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53059 4.36845L15.2685 4.36846M15.2685 4.36846L15.2685 13.1063M15.2685 4.36846L5.36844 14.2675"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </div>
          {/* /.hero-texts */}
          <div className="hero-image d-flex justify-content-center">
            {image && (
              <img
                src={image}
                className={`${isSvg ? 'svg' : 'bitmap'}`}
                alt=""
              />
            )}
          </div>
          {/* /.hero-image */}
        </div>
        {/* ./container */}
      </section>
      {/* ./hero */}
      <style jsx>{`
        section.hero {
          background: #221f20;
          height: calc(100vh - 138px);
          min-height: 500px;
          position: relative;
          .hero-image {
            width: 50%;
            img.svg {
              width: 350px;
            }
            img.bitmap {
              position: absolute;
              width: calc(50vw - 60px);
              height: calc(100% - 240px);
              right: 0;
              top: 50%;
              object-fit: cover;
              transform: translateY(-50%);
            }
          }
          .hero-texts {
            h3 {
              font-size: 16px;
              color: white;
              opacity: 0.7;
              text-transform: uppercase;
              margin: 0 0 40px 0;
            }
            svg {
              margin: 0 20px;
            }
            h2 {
              font-size: 16px;
              color: white;
              text-transform: uppercase;
              margin: 0 0 40px 0;
            }
            h1 {
              font-size: 56px;
              color: white;
              line-height: 110%;
              margin: 0;
              max-width: 500px;
              span {
                color: #ffdb00;
              }
            }
            a {
              display: inline-block;
              font-size: 17px;
              color: white;
              text-transform: uppercase;
              text-decoration: none;
              margin-top: 42px;
              transition: 0.3s;
              svg path {
                transition: 0.3s;
              }
              &:hover {
                color: #ffdb00;
                svg path {
                  stroke: #ffdb00;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
