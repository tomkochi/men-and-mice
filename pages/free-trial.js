import Head from "next/head";
import Layout from "../components/Main-layout";
import Link from "next/link";
import BottomPick from "../components/Bottom-pick";

const FreeTrial = () => {
  return (
    <Layout>
      <Head>
        <title>Men &amp; Mice - Case study</title>
      </Head>
      <div className="case">
        <div className="body">
          <section className="hero">
            <div className="wrapper">
              <Link href="#" passHref>
                <a className="f-ap-r">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1068 3.36882L4.36895 3.36882M4.36895 3.36882L4.36895 12.1067M4.36895 3.36882L14.269 13.2679"
                      stroke="#442ACC"
                      strokeWidth="2"
                    />
                  </svg>
                  Case studies
                </a>
              </Link>
              <h1 className="f-ap-b">
                Business solutions for Central Bank of Austria<span>.</span>
              </h1>
            </div>
            {/* /.wrapper */}
          </section>
          {/* /.hero */}

          <section className="case-info">
            <div className="wrapper">
              <div className="points d-flex flex-wrap">
                <div className="point">
                  <div className="point-inner-wrapper">
                    <div className="heading">Customer</div>
                    <div className="value">Oesterreichische Nationalbank</div>
                  </div>
                  {/* /.point-inner-wrapper */}
                </div>
                {/* /.point */}

                <div className="point">
                  <div className="point-inner-wrapper">
                    <div className="heading">Locations</div>
                    <div className="value">
                      Oesterreichische Nationalbank IT serves 10 offices
                    </div>
                  </div>
                  {/* /.point-inner-wrapper */}
                </div>
                {/* /.point */}

                <div className="point">
                  <div className="point-inner-wrapper">
                    <div className="heading">Website</div>
                    <div className="value">www.oenb.at</div>
                  </div>
                  {/* /.point-inner-wrapper */}
                </div>
                {/* /.point */}

                <div className="point">
                  <div className="point-inner-wrapper">
                    <div className="heading">Industry</div>
                    <div className="value">Finance</div>
                  </div>
                  {/* /.point-inner-wrapper */}
                </div>
                {/* /.point */}
              </div>
              {/* /.points */}
            </div>
            {/* /.wrapper */}
          </section>
          {/* /.case-info */}

          <section className="download">
            <div className="wrapper">
              <a href="#" className="download-link f-ap-r">
                Download PDF{" "}
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.818482 7.98086L6.9971 14.1595M6.9971 14.1595L13.1757 7.98086M6.9971 14.1595L6.99639 0.159424"
                    stroke="#442ACC"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
            {/* /.wrapper */}
          </section>
          {/* /.download */}

          <section className="content">
            <h2>At a glance</h2>
            <p>
              As an integral part of the European System of Central Banks, OeNB
              (central bank of Austria) sets monetary policy, maintains
              financial stability, provides banknotes and coins, compiles
              comprehensive sta- tistics and facilitates cashless payments in
              Austria.
            </p>
            <h2>Situation</h2>
            <p>
              In anticipation of IPv6, OeNB needed an IP Address Management
              solution that could ease the transition, as well as consolidate
              the variety of methods used by the different networking teams to
              record, track and manage their IP subnet data. With strong
              in-house knowledge, advanced business logic built into their
              system configurations and an effective mix of BIND, ISC DHCP and
              Windows, it was critical that the commercial IPAM solution
              integrated with, rather than replaced, OeNB IP network
              infrastructure.
            </p>
            <h2>Solution</h2>
            <p>
              After scanning the market for a scalable IPAM solution to
              complement the solid strengths of their existing IP
              infrastructure, OeNB chose to invest in the sophisticated
              architectural flexibility of the Men & Mice DNS, DHCP and IP
              Address Management (DDI) Suite software solution.
            </p>
            <blockquote>
              <p>
                “The nice thing is that it integrates into the way we work.
                Teams have more freedom to get on with their daily tasks. They
                don’t have to ask for permission or wait for help to do what
                needs to be done, yet they can only work on the parts of the
                network they’ve been assigned to.”
              </p>
              <footer>Thomas Zenz OeNB, Network Systems Engineer</footer>
            </blockquote>
            <h2>Finding reliable IP checks and balances</h2>
            <p>
              New technology offers new solutions, but also poses fresh
              challenges. At Oesterreichische Nationalbank (OeNB), the Austrian
              central bank, systems engineers identified the advent of IPv6 as a
              new challenge best met by re-evaluating their system of IP network
              management as a whole.
            </p>
            <p>
              As a well-established organization, OeNB’s IP network management
              had evolved to include a number of independent teams managing
              individual subnets, each with their own techniques – text files,
              Excel or other combinations.
            </p>
            <p>
              During the process of building an IP database for more effective
              documentation of IP addresses, it became clear to network systems
              engineer Thomas Zenz and his colleagues that a commercial IPAM
              solution would help to improve their system’s scalability, adding
              much-needed search functions and automatic error checking. With a
              network consisting of BIND, ISC DHCP, and Windows, and having
              built considerable business logic into their network
              configurations, it was critical to OeNB networking teams that a
              commercial IPAM solution integrate with their server environment,
              as well as their system of IP management. The expense and
              disruption of a large-scale replacement of OeNB’s server
              infrastructure was not an options.
            </p>
            <div className="link">
              <Link href="#" passHref>
                <a className="link-left">
                  Read about cloud features
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53059 4.36839L15.2685 4.3684M15.2685 4.3684L15.2685 13.1063M15.2685 4.3684L5.36844 14.2674"
                      stroke="#442ACC"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <h2>Banking on customizable change</h2>
            <p>
              While on the lookout for a suitable commercial solution, Thomas
              and members of the OeNB team made first contact with the highly
              flexible Men & Mice DNS, DHCP and IP Address Management (DDI)
              Suite solution at a Cisco Live trade show. The team was
              particularly taken by the Suite’s unique ability to integrate with
              existing network infrastructure, including BIND and ISC DHCP. This
              would enable OeNB to continue to build on the strengths of their
              customized infrastructure, yet gain the benefits of a wide range
              of DDI automation, tracking and management functionality, plus
              fine-grained, role-based access control - a must-have for a
              network managed by multiple teams.
            </p>
            <p>
              Following their decision to invest in the Men & Mice DDI Suite,
              OeNB network systems engineers embarked on the virtually painless
              process of deploying and integrating the Suite with their existing
              infrastructure. The transition quickly delivered the desired
              results: automation and consolidation of teams’ IP documentation,
              tracking and managing techniques, while preserving the network
              environment and the OeNB system of management.
            </p>
            <p>
              To Thomas, the Suite’s sensible access management permissions were
              exactly what their multiple teams needed. Instead of centralized
              delegation reducing team autonomy, the Suite increased it.
            </p>
            <div className="link">
              <Link href="#" passHref>
                <a className="link-left">
                  Read about cloud features{" "}
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53059 4.36839L15.2685 4.3684M15.2685 4.3684L15.2685 13.1063M15.2685 4.3684L5.36844 14.2674"
                      stroke="#442ACC"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <h2>Building network resilience for the future</h2>
            <p>
              Investing in the Men & Mice Suite has not only helped OeNB set the
              course towards adopting IPv6, but also helped to complement their
              existing system with the right checks and balances for an
              increasingly virtualized future.
            </p>
            <p>
              In the ever-changing technological hothouse of networking,
              diversified network security threats will demand diversified
              safeguards. While the Men & Mice Suite effortlessly scales as a
              company’s IP infrastructure grows, to OeNB its small footprint and
              ease of use also make it the ideal tool for splitting parts of
              their network and building smaller subnets for security purposes.
            </p>
            <div className="quote">
              <p>
                “With the Men & Mice Suite, you always find what you are looking
                for,” says Thomas. “It simply makes life more organized”.
              </p>
            </div>
            <div className="link">
              <Link href="#" passHref>
                <a className="link-center">
                  Read about cloud features{" "}
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53059 4.36839L15.2685 4.3684M15.2685 4.3684L15.2685 13.1063M15.2685 4.3684L5.36844 14.2674"
                      stroke="#442ACC"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </section>
          {/* /.content */}
        </div>
        {/* .body */}
        <section className="get-in-touch">
          <BottomPick
            category="Get in touch"
            heading="Feel free to contact us anytime"
            text=""
            image="/img/feature-1.png"
            image-text="Lets talk"
          />
        </section>
        {/* /.case-study */}
      </div>
      <style jsx>{`
        .body {
          background: white;
          .wrapper,
          .content h2,
          .content p {
            width: calc(100vw - 60px);
            max-width: 980px;
            margin: 0 auto;
            padding: 0 90px;
          }
          a {
            text-decoration: none;
            transition: opacity 0.2s;
            &:hover {
              opacity: 0.6;
            }
          }
          section.hero {
            padding: 110px 0;
            a {
              font-size: 17px;
              color: #442acc;
              text-transform: uppercase;
              svg {
                margin-right: 18px;
              }
            }
            h1 {
              font-size: 64px;
              color: #221f20;
              margin-top: 42px;
            }
          }

          section.case-info {
            margin-bottom: 81px;
            .wrapper {
              background: #ffdb00;
              padding: 90px;
              .points {
                .point {
                  width: 50%;
                  margin-bottom: 60px;
                  &:nth-last-of-type(-n + 2) {
                    margin-bottom: 0;
                  }
                  .point-inner-wrapper {
                    width: calc(100% - 40px);
                  }
                }
              }
            }
          }

          section.download {
            margin-bottom: 90px;
            .wrapper {
              text-align: right;
              .download-link {
                font-size: 17px;
                color: #442acc;
                text-transform: uppercase;
                svg {
                  margin-left: 18px;
                }
              }
            }
          }

          .content {
            h2 {
              font-family: "Apercu Bold";
              font-size: 34px;
              margin-bottom: 30px;
              margin-top: 66px;
            }
            p {
              font-family: "Apercu Light";
              font-size: 17px;
              line-height: 170%;
              color: #221f20;
              margin-bottom: 24px;
            }
            blockquote {
              background: #ffdb00;
              max-width: 980px;
              margin: 120px auto;
              padding: 90px;
              p {
                padding: 0;
                width: 80%;
                font-family: "Apercu Regular";
                font-size: 24px;
                line-height: 170%;
                color: #221f20;
                margin-left: 0;
                margin-bottom: 65px;
              }
              footer {
                text-align: right;
                font-family: "Apercu Regular";
                font-size: 18px;
                line-height: 170%;
                color: #221f20;
              }
            }
            .link {
              width: calc(100vw - 60px);
              max-width: 980px;
              margin: 70px auto;
              padding: 0 90px;
              a {
                text-transform: uppercase;
                color: #442acc;
                font-family: "Apercu Regular";
                font-size: 17px;
                display: block;
                &.link-left {
                  text-align: left;
                }
                &.link-right {
                  text-align: right;
                }
                &.link-center {
                  text-align: center;
                }
              }
              svg {
                margin-left: 18px;
              }
            }
            .quote {
              width: calc(100vw - 60px);
              max-width: 980px;
              margin: 50px auto 80px auto;
              padding: 0 90px;
              p {
                font-family: "Apercu Regular";
                font-size: 18px;
                background: #ffdb00;
                color: #000000;
                width: auto;
                padding: 40px;
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
      `}</style>
    </Layout>
  );
};

export default FreeTrial;
