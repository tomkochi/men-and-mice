import Scrollspy from 'react-scrollspy'
import Head from 'next/head'
import Layout from '../../../components/Main-layout'
import Link from 'next/link'
import Hero from '../../../components/heros/text-left'
import BottomPick from '../../../components/Bottom-pick'
import { useEffect } from 'react'

const Course = () => {
  const handleScroll = (event) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const el = document.querySelector('.nav-wrapper')
    const elBottom = document.querySelector('.matter').getBoundingClientRect()
      .bottom

    if (
      document.querySelector('.contents').getBoundingClientRect().top <= 100
    ) {
      el.classList.add('fixed-nav')
    } else {
      el.classList.remove('fixed-nav')
    }

    if (elBottom <= el.getBoundingClientRect().height + 100) {
      el.classList.add('hidden')
    } else {
      el.classList.remove('hidden')
    }
  }

  const showSection = (section) => {
    window.scrollTo({
      top: document.querySelector(`#${section}`).offsetTop - 100,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Men &amp; Mice - Case study</title>
      </Head>

      <Hero
        hero="Business solutions for Central Bank of Austria"
        tags={['Product', 'Training', 'Courses']}
        register-course={{ text: 'register course', url: '/' }}
      />

      <div className="contents container">
        <div className="d-flex align-items-start">
          <div className="navigation flex-grow-1">
            <div className="nav-wrapper">
              <Scrollspy
                className="nav-list list-unstyled"
                items={['section-1', 'section-2', 'section-3', 'section-4']}
                currentClassName="is-current"
                offset={-300}
              >
                <li
                  className="d-flex align-items-center"
                  onClick={() => showSection('section-1')}
                >
                  <div className="number">1.</div>
                  <div className="title">Intro</div>
                </li>
                <li
                  className="d-flex align-items-center"
                  onClick={() => showSection('section-2')}
                >
                  <div className="number">2.</div>
                  <div className="title">Course syllabus</div>
                </li>
                <li
                  className="d-flex align-items-center"
                  onClick={() => showSection('section-3')}
                >
                  <div className="number">3.</div>
                  <div className="title">Prerequisites</div>
                </li>
                <li
                  className="d-flex align-items-center"
                  onClick={() => showSection('section-4')}
                >
                  <div className="number">4.</div>
                  <div className="title">Upcoming dates</div>
                </li>
              </Scrollspy>
            </div>
            {/* .nav-wrapper */}
          </div>
          {/* .navigation */}
          <div className="matter">
            <div className="wrapper">
              <section id="section-1">
                <div className="case-info d-flex flex-wrap">
                  <div className="info">
                    <h6>COURSE LENGTH</h6>
                    <h5>3 days</h5>
                  </div>
                  <div className="info">
                    <h6>CATEGORY</h6>
                    <h5>DNS</h5>
                  </div>
                  <div className="info">
                    <h6>price</h6>
                    <h5>$850</h5>
                  </div>
                  <div className="info">
                    <h6>LOCATION</h6>
                    <h5>Online Course</h5>
                  </div>
                </div>
                {/* section.case-info */}
                <h3>Intro</h3>
                <p>
                  DNS & BIND Jump Start is a new course, held completely online
                  and designed to give a concise introduction into running a
                  BIND 9 domain name server. The course covers all modern
                  protocol features such as EDNS, DNSSEC, Catalog-Zones,
                  DNS-Cookies and much more.
                </p>
                <p>
                  Whether you already have some experience running a BIND 9
                  server or come fresh to the game, this course will give you
                  all information you need to be a successful DNS administrator.
                  During this course, every participant will be able to build
                  and operate their own DNS server on the Internet with live
                  data.
                </p>
              </section>
              {/* #section-1 */}
              <section id="section-2">
                <h3>Course syllabus</h3>
                <ul>
                  <li>DNS Basics (how the protocol works)</li>
                  <li>A quick look at DNSSEC</li>
                  <li>Querying DNS with 'dig'</li>
                  <li>DNS Clients, Resolver</li>
                  <li>Building and maintaining a DNS Resolver</li>
                  <li>BIND 9 logging</li>
                  <li>DNS troubleshooting</li>
                  <li>Getting your own domain delegation</li>
                  <li>Setting up a DNS zone</li>
                  <li>Building resilience with secondary server</li>
                  <li>Easy DNSSEC with BIND 9.16 "default-policy"</li>
                  <li>Completing the DNSSEC chain of trust</li>
                  <li>DNS server maintenance</li>
                  <li>Automatic DNS provisioning with Catalog-Zones</li>
                  <li>Security best practices</li>
                </ul>
              </section>
              {/* #section-2 */}
              <section id="section-3">
                <h3>Prerequisites</h3>
                <p>
                  Participants for this course need to know how to operate the
                  Unix command line (shell) and have Unix/Linux administration
                  knowledge. Basic knowledge of Internet network protocols IPv6
                  and IPv4 is required.
                </p>
                <h3>Material Required</h3>
                <p>
                  Participants for this course need to know how to operate the
                  Unix command line (shell) and have Unix/Linux administration
                  knowledge. Basic knowledge of Internet network protocols IPv6
                  and IPv4 is required.
                </p>
                <h3>DNS & BIND Training</h3>
                <p>
                  This is DNS & BIND training, Men&Mice products are not
                  included in the course. If Men&Mice Suite training is
                  required, options are available.
                </p>
              </section>
              {/* #section-3 */}
              <section id="section-4">
                <h3>Ready to elevate your DNS knowledge?</h3>
                <ol className="list-unstyled">
                  <li>21. April 2020 </li>
                  <li>26. May 2020</li>
                  <li>02. July 2020 </li>
                  <li>11. August 2020 </li>
                  <li>22. September 2020</li>
                </ol>
              </section>
              {/* #section-4 */}
              <section className="bottom-link">
                <Link href="/" passHref>
                  <a>
                    register course
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
                        stroke-width="2"
                      />
                    </svg>
                  </a>
                </Link>
              </section>
            </div>
            {/* .wrapper */}
          </div>
          {/* .matter */}
        </div>
      </div>
      {/* .contents */}
      <BottomPick
        data={{
          primary: {
            title: [{ text: 'Feel free to contact us anytime' }],
            link_name: 'get a price quote',
            url: '/',
            image: { url: '/img/feature-1.png' },
          },
        }}
      />
      <style jsx>{`
        .contents {
          margin: 100px auto;
          .navigation {
            .nav-wrapper {
              position: static;
              transform: translateX(0);
              opacity: 1;
              transition: all 0.3s;
              &.fixed-nav {
                position: fixed;
                top: 100px;
              }
              &.hidden {
                transform: translateX(-400px);
                opacity: 0;
              }
            }
            li {
              max-width: 300px;
              font-family: 'Apercu Regular';
              font-size: 18px;
              color: #221f20;
              opacity: 0.4;
              margin: 5px 0;
              transition: opacity 0.3s;
              cursor: pointer;
              &:hover {
                opacity: 0.7;
              }
              &.is-current {
                opacity: 1;
              }
              .number {
                margin-right: 30px;
              }
            }
          }
          .matter {
            .wrapper {
              width: 800px;
              section {
                &:not(:last-of-type) {
                  margin-bottom: 100px;
                }
              }
              .case-info {
                .info {
                  margin-right: 60px;
                  h6 {
                    font-family: 'Apercu Regular';
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #221f20;
                    white-space: nowrap;
                    margin-bottom: 12px;
                  }
                  h5 {
                    font-family: 'Apercu Medium';
                    font-size: 16px;
                    color: #221f20;
                    white-space: nowrap;
                    margin-bottom: 30px;
                  }
                }
              }
              h3 {
                margin-top: 60px;
                font-family: 'Apercu Bold';
                font-size: 36px;
                color: #221f20;
                line-height: 110%;
                max-width: 380px;
              }
              p {
                margin-top: 23px;
                margin-bottom: 18px;
                font-family: 'Apercu Light';
                font-size: 17px;
                line-height: 150%;
                color: #221f20;
              }
              .quote {
                padding: 60px;
                background: #ffdb00;
                margin-top: 60px;
                p {
                  font-family: 'Apercu Regular';
                  font-size: 24px;
                  line-height: 150%;
                  color: #221f20;
                  margin: 0;
                }
                h4 {
                  text-align: right;
                  font-family: 'Apercu Bold';
                  font-size: 18px;
                  line-height: 170%;
                  color: #221f20;
                  margin: 40px 0 0;
                }
              }
              ul {
                column-count: 2;
                column-gap: 40px;
                list-style-type: none;
                padding: 0;
                margin-top: 30px;
                li {
                  margin-left: 22px;
                  margin-bottom: 16px;
                  position: relative;
                  font-family: 'Apercu Regular';
                  font-size: 18px;
                  line-height: 150%;
                  &:before {
                    content: '';
                    position: absolute;
                    left: -22px;
                    top: 0.5rem;
                    width: 6px;
                    height: 6px;
                    display: block;
                    border-radius: 50%;
                    background: #442acc;
                  }
                }
              }
              ol {
                column-count: 2;
                column-gap: 40px;
                list-style-type: none;
                padding: 0;
                margin-top: 30px;
                position: relative;
                &:after {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 1px;
                  background: white;
                  left: 0;
                  bottom: 0;
                }
                li {
                  padding: 24px 0;
                  position: relative;
                  font-family: 'Apercu Regular';
                  font-size: 18px;
                  line-height: 150%;
                  &:not(:last-of-type):after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 1px;
                    width: 100%;
                    background: rgba(34, 31, 32, 0.1);
                  }
                }
              }
              .bottom-link {
                a {
                  background: #ffdb00;
                  padding: 34px 34px 29px;
                  margin: 0 !important;
                  font-family: 'Apercu Regular';
                  font-size: 17px;
                  color: #221f20;
                  text-transform: uppercase;
                  display: inline-block;
                  text-decoration: none;
                  transition: 0.3s;
                  svg {
                    margin-left: 18px;
                    path {
                      transition: 0.3s;
                    }
                  }
                  &:hover {
                    background: #221f20;
                    color: white;
                    svg path {
                      stroke: white;
                    }
                  }
                }
              }
            }
          }
        }
      `}</style>
    </Layout>
  )
}

export default Course
