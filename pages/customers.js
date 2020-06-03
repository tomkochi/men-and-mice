import Layout from "../components/Main-layout";
import { useState } from "react";
import Head from "next/head";
import BottomPick from "../components/Bottom-pick";

const Customers = () => {
  const [caseStudies, setCaseStudies] = useState([
    {
      heading: "Manufacturing",
      description: "Business solutions for Central Bank of Austria",
    },
    {
      heading: "Tech",
      description:
        "Migrating a Fortune 500 Multinational Tech Company to the Suite",
    },
    {
      heading: "Tech",
      description: "Delivering the Need for Speed for HBPO Group",
    },
    {
      heading: "Health",
      description: "Putting people first at Icelands National Hospital",
    },
    {
      heading: "Education",
      description:
        "Finding a viable network solution for Texas Womans University",
    },
    {
      Heading: "Manufacturing",
      description:
        "Clarity, Simplicity and Efficiency to the IP space for HD supply",
    },
  ]);
  return (
    <Layout>
      <Head>
        <title>Men&amp;Mice</title>
      </Head>
      <div className="body">
        <section className="hero d-flex align-items-center">
          <div className="container d-flex">
            <div className="hero-texts col">
              <h2 className="f-ap-b">Customers</h2>
              <h1 className="f-ap-b">Providing the best for our customers.</h1>
              <h2>
                <a href="#" className="f-ap-b">
                  Contact a migration specialist
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
                </a>
              </h2>
            </div>
            {/* /.hero-texts */}
            <div className="hero-image">
              <svg
                width="370"
                height="332"
                viewBox="0 0 370 332"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M149.091 317.469C149.091 324.484 154.122 330.367 160.982 331.725C161.897 331.951 162.811 331.951 163.726 331.951H171.73H203.057H211.061C211.976 331.951 212.89 331.951 213.805 331.725C220.665 330.367 225.696 324.484 225.696 317.469V291.673C225.696 291.446 225.696 291.22 225.696 290.994C225.696 269.949 208.546 256.372 187.279 256.372C166.013 256.372 148.863 270.175 148.863 290.994C148.863 291.22 148.863 291.446 148.863 291.673V317.469H149.091Z"
                  fill="#FF4263"
                />
                <path
                  d="M249.48 317.469C249.48 324.484 254.511 330.367 261.371 331.725C262.286 331.951 263.201 331.951 264.115 331.951H272.119H303.447H311.45C312.365 331.951 313.279 331.951 314.194 331.725C321.054 330.367 326.085 324.484 326.085 317.469V291.673C326.085 291.446 326.085 291.22 326.085 290.994C326.085 269.949 308.935 256.372 287.668 256.372C266.402 256.372 249.252 270.175 249.252 290.994C249.252 291.22 249.252 291.446 249.252 291.673V317.469H249.48Z"
                  fill="#FF4263"
                />
                <path
                  d="M187.509 245.076C204.431 245.076 218.151 231.499 218.151 214.98H156.639C156.867 231.726 170.588 245.076 187.509 245.076Z"
                  fill="#4C1BD4"
                />
                <path
                  d="M287.898 245.076C304.82 245.076 318.54 231.499 318.54 214.98H257.028C257.485 231.726 271.205 245.076 287.898 245.076Z"
                  fill="#4C1BD4"
                />
                <path
                  d="M337.29 0H78.4351C61.0562 0 46.8787 14.0297 46.8787 31.2274V47.5199C67.0016 47.7462 83.4659 64.0387 83.4659 84.1781C83.4659 104.317 67.2303 120.61 46.8787 120.836V140.071C49.6227 140.071 52.5954 140.297 55.1108 140.749H128.971C139.947 140.749 148.865 149.574 148.865 160.436C148.865 171.298 139.947 180.123 128.971 180.123H92.384C92.384 180.576 92.384 181.028 92.384 181.481C92.384 181.707 92.384 182.16 92.384 182.386V214.971H156.64V214.745C156.64 198 170.36 184.196 187.511 184.196C204.432 184.196 218.381 197.773 218.381 214.745V214.971H257.484V214.745C257.484 198 271.204 184.196 288.354 184.196C305.276 184.196 319.225 197.773 319.225 214.745V214.971H337.747C355.126 214.971 369.303 200.941 369.303 183.744V31.2274C368.846 14.0297 354.669 0 337.29 0Z"
                  fill="#FFDB00"
                />
                <path
                  d="M46.1895 47.293C25.8379 47.293 9.14502 63.8118 9.14502 83.9512C9.14502 104.091 25.6093 120.609 46.1895 120.609C46.4182 120.609 46.4182 120.609 46.6469 120.609V47.5193C46.4182 47.5193 46.4182 47.293 46.1895 47.293Z"
                  fill="#4C1BD4"
                />
                <path
                  d="M46.6487 183.758V139.633C46.42 139.633 46.42 139.633 46.1913 139.633C20.809 139.633 0 156.152 0 181.269C0 181.496 0 181.948 0 182.174V310.704C0 319.303 6.17409 326.318 14.4062 327.902C15.5496 328.128 16.6929 328.128 17.6076 328.128H27.4404H64.9423H74.7751C75.9184 328.128 77.0618 327.902 77.9765 327.902C86.2086 326.318 92.3827 319.303 92.3827 310.704V214.986H78.2051C60.8262 214.986 46.6487 200.956 46.6487 183.758Z"
                  fill="#FF4263"
                />
                <path
                  d="M92.3838 181.269C92.3838 180.817 92.3838 180.364 92.3838 179.912H128.971C139.947 179.912 148.865 171.086 148.865 160.225C148.865 149.363 139.947 140.312 128.971 140.312H55.1105C52.3665 139.859 49.6225 139.633 46.8784 139.633V183.532C46.8784 200.73 61.056 214.759 78.4349 214.759H92.6124V182.401C92.3838 181.948 92.3838 181.722 92.3838 181.269Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* /.hero-image */}
          </div>
          {/* ./container */}
        </section>
        {/* ./hero */}

        <section className="challenges-solutions">
          <div className="container">
            <div className="points d-flex justify-content-between">
              <div className="wrapper">
                <div className="point">
                  <h2 className="f-ap-b">Challenges</h2>
                  <p className="f-ap-l">
                    Realizing they had a single point of failure, this European
                    media services company decided it needed to invest in a
                    second DNS vendor for redundancy and looked to NS1’s
                    Dedicated DNS solution.
                  </p>
                </div>
                {/* /.point */}
              </div>
              {/* /.wrapper */}

              <div className="wrapper">
                <div className="point">
                  <h2 className="f-ap-b">Solutions</h2>
                  <p className="f-ap-l">
                    After deploying the Men&Mice DNS solutions the team quickly
                    realized they were outserving the traffic on the regular
                    managed DNS. Today, Men&Mice serves more queries than the
                    incumbent managed DNS solution.
                  </p>
                </div>
                {/* /.point */}
              </div>
              {/* /.wrapper */}
            </div>
            {/* /.points */}
          </div>
        </section>
        {/* /.work-smarter */}

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
        {/* /.features` */}

        <section className="read-case-studies">
          <div className="container">
            <h2 className="f-ap-b">
              Read the case studies<span>.</span>
            </h2>
            <ul className="case-navs list-unstyled d-flex">
              <li className="case-nav f-ap-r">All</li>
              <li className="case-nav active f-ap-r">Tech</li>
              <li className="case-nav f-ap-r">Manufacturing</li>
              <li className="case-nav f-ap-r">Education</li>
              <li className="case-nav f-ap-r">Health</li>
            </ul>
            {/* /.case-navs */}
            <div className="case-studies d-flex flex-wrap justify-content-between">
              {caseStudies.map((c, i) => {
                return (
                  <div className="wrapper" key={i}>
                    <div className="case-study">
                      <h3 className="f-ap-r">{c.heading}</h3>
                      <h4 className="f-ap-r">{c.description}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* /.case-studies */}
          </div>
          {/* /.container */}
        </section>
        {/* /section.read-case-studies */}

        <section className="get-in-touch">
          <BottomPick
            category="Get in touch"
            heading="Operate smarter"
            text="Knowing who did what, when and where on the network helps network and cyber security teams."
            image="/img/feature-1.png"
            image-text="Get a price quote"
          />
        </section>
        {/* /.case-study */}
      </div>
      {/* /.body */}

      <style jsx>{`
        section.hero {
          background: white;
          //padding: 260px 0;
          height: calc(100vh - 138px);
          min-height: 500px;
          .hero-texts {
            h2,
            h2 a {
              font-size: 16px;
              color: #442acc;
              text-transform: uppercase;
              margin: 0 0 40px 0;
              text-decoration: none;
              svg {
                margin-left: 18px;
              }
            }
            h1 {
              font-size: 72px;
              color: #221f20;
              max-width: 647px;
              line-height: 110%;
              margin: 0;
              margin-bottom: 54px;
            }
          }
        }
        /* setion.hero */

        section.challenges-solutions {
          background: #ffdb00;
          padding: 210px 0;
          h2 {
            font-size: 36px;
            line-height: 110%;
            color: #221f20;
            margin-bottom: 30px;
            line-height: 120%;
          }
          p {
            font-size: 20px;
            line-height: 150%;
            color: #221f20;
          }
          .points {
            position: relative;
            &:after {
              content: "";
              position: absolute;
              right: calc(50% + 100px);
              top: 47%;
              display: block;
              width: 14px;
              height: 14px;
              background: url("/img/black-arrow-right.svg") no-repeat center;
            }
            .wrapper {
              width: 50%;
              .point {
                width: calc(100% - 200px);
              }
            }
          }
        }
        /* section.challenges-solutions */

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
        /* section.features */

        section.read-case-studies {
          background: white;
          padding: 80px 0 140px 0;
          h2 {
            font-size: 64px;
            line-height: 110%;
            max-width: 400px;
            color: #221f20;
            margin-bottom: 50px;
            span {
              color: #442acc;
            }
          }
          ul {
            margin-bottom: 12px;
            li {
              font-size: 16px;
              margin-right: 30px;
              text-transform: uppercase;
              color: #6b6164;
              cursor: pointer;
              transition: all 0.2s;
              &:hover {
                color: #442acc;
                opacity: 0.6;
              }
              &.active {
                color: #442acc;
              }
            }
          }
          .case-studies {
            .wrapper {
              width: 50%;
              .case-study {
                width: calc(100% - 210px);
                padding-top: 100px;
                h3 {
                  font-size: 16px;
                  margin-bottom: 30px;
                  text-transform: uppercase;
                  color: #442acc;
                }
                h4 {
                  font-size: 36px;
                  line-height: 130%;
                  color: #221f20;
                }
              }
            }
          }
        }

        section.get-in-touch {
          background: #221f20;
          padding: 110px 0;
          .container {
            .wrapper {
              width: calc(50% - 45px);
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
      `}</style>
    </Layout>
  );
};

export default Customers;
