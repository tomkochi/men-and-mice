import Scrollspy from 'react-scrollspy'
import Head from 'next/head'
import Layout from '../components/Main-layout'
import Link from 'next/link'
import Hero from '../components/heros/text-left'
import BottomPick from '../components/Bottom-pick'
import { useEffect } from 'react'

const CaseStudy = () => {
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
        image="/img/feature-1.png"
        tags={['Customers', 'Case Study']}
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
                  <div className="title">
                    Finding reliable IP checks and balances
                  </div>
                </li>
                <li
                  className="d-flex align-items-center"
                  onClick={() => showSection('section-3')}
                >
                  <div className="number">3.</div>
                  <div className="title">Banking on customizable change</div>
                </li>
                <li
                  className="d-flex align-items-center"
                  onClick={() => showSection('section-4')}
                >
                  <div className="number">4.</div>
                  <div className="title">
                    Building network resilience for the future
                  </div>
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
                    <h6>Customer</h6>
                    <h5>Oesterreichische Nationalbank</h5>
                  </div>
                  <div className="info">
                    <h6>Website</h6>
                    <h5>www.oenb.at</h5>
                  </div>
                  <div className="info">
                    <h6>Locations</h6>
                    <h5>10 offices around the globe</h5>
                  </div>
                  <div className="info">
                    <h6>Industry</h6>
                    <h5>Manufacturing</h5>
                  </div>
                </div>
                {/* section.case-info */}
                <h3>At a glance</h3>
                <p>
                  As an integral part of the European System of Central Banks,
                  OeNB (central bank of Austria) sets monetary policy, maintains
                  financial stability, provides banknotes and coins, compiles
                  comprehensive sta- tistics and facilitates cashless pay- ments
                  in Austria.
                </p>
                <h3>Situation</h3>
                <p>
                  In anticipation of IPv6, OeNB needed an IP Address Management
                  solution that could ease the transition, as well as
                  consolidate the variety of methods used by the different
                  networking teams to record, track and manage their IP subnet
                  data. With strong in-house knowledge, advanced business logic
                  built into their system configurations and an effective mix of
                  BIND, ISC DHCP and Windows, it was critical that the
                  commercial IPAM solution integrated with, rather than
                  replaced, OeNB IP network infrastructure.
                </p>
                <h3>Solution</h3>
                <p>
                  After scanning the market for a scalable IPAM solution to
                  complement the solid strengths of their existing IP
                  infrastructure, OeNB chose to invest in the sophisticated
                  architectural flexibility of the Men & Mice DNS, DHCP and IP
                  Address Management (DDI) Suite software solution.
                </p>
                <div className="quote">
                  <p>
                    “The nice thing is that it integrates into the way we work.
                    Teams have more freedom to get on with their daily tasks.
                    They don’t have to ask for permission or wait for help to do
                    what needs to be done, yet they can only work on the parts
                    of the network they’ve been assigned to.”
                  </p>
                  <h4>Thomas Zenz OeNB, Network Systems Engineer</h4>
                </div>
                {/* .quote */}
              </section>
              {/* #section-1 */}
              <section id="section-2">
                <h3>Finding reliable IP checks and balances</h3>
                <p>
                  New technology offers new solutions, but also poses fresh
                  challenges. At Oesterreichische Nationalbank (OeNB), the
                  Austrian central bank, systems engineers identified the advent
                  of IPv6 as a new challenge best met by re-evaluating their
                  system of IP network management as a whole.
                </p>
                <p>
                  As a well-established organization, OeNB’s IP network
                  management had evolved to include a number of independent
                  teams managing individual subnets, each with their own
                  techniques – text files, Excel or other combinations.
                </p>
                <p>
                  During the process of building an IP database for more
                  effective documentation of IP addresses, it became clear to
                  network systems engineer Thomas Zenz and his colleagues that a
                  commercial IPAM solution would help to improve their system’s
                  scalability, adding much-needed search functions and automatic
                  error checking. With a network consisting of BIND, ISC DHCP,
                  and Windows, and having built considerable business logic into
                  their network configurations, it was critical to OeNB
                  networking teams that a commercial IPAM solution integrate
                  with their server environment, as well as their system of IP
                  management. The expense and disruption of a large-scale
                  replacement of OeNB’s server infrastructure was not an
                  options.
                </p>
                <Link href="/" passHref>
                  <a className="arrow-right-up">Read about Cloud Features</a>
                </Link>
              </section>
              {/* #section-2 */}
              <section id="section-3">
                <h3>Banking on customizable change</h3>
                <p>
                  While on the lookout for a suitable commercial solution,
                  Thomas and members of the OeNB team made first contact with
                  the highly flexible Men & Mice DNS, DHCP and IP Address
                  Management (DDI) Suite solution at a Cisco Live trade show.
                  The team was particularly taken by the Suite’s unique ability
                  to integrate with existing network infrastructure, including
                  BIND and ISC DHCP. This would enable OeNB to continue to build
                  on the strengths of their customized infrastructure, yet gain
                  the benefits of a wide range of DDI automation, tracking and
                  management functionality, plus fine-grained, role-based access
                  control - a must-have for a network managed by multiple teams.
                </p>
                <p>
                  Following their decision to invest in the Men & Mice DDI
                  Suite, OeNB network systems engineers embarked on the
                  virtually painless process of deploying and integrating the
                  Suite with their existing infrastructure. The transition
                  quickly delivered the desired results: automation and
                  consolidation of teams’ IP documentation, tracking and
                  managing techniques, while preserving the network environment
                  and the OeNB system of management.
                </p>
                <p>
                  To Thomas, the Suite’s sensible access management permissions
                  were exactly what their multiple teams needed. Instead of
                  centralized delegation reducing team autonomy, the Suite
                  increased it.
                </p>
                <Link href="/" passHref>
                  <a className="arrow-right-up">Read about Cloud Features</a>
                </Link>
              </section>
              {/* #section-3 */}
              <section id="section-4">
                <h3>Building network resilience for the future</h3>
                <p>
                  Investing in the Men & Mice Suite has not only helped OeNB set
                  the course towards adopting IPv6, but also helped to
                  complement their existing system with the right checks and
                  balances for an increasingly virtualized future.
                </p>
                <p>
                  In the ever-changing technological hothouse of networking,
                  diversified network security threats will demand diversified
                  safeguards. While the Men & Mice Suite effortlessly scales as
                  a company’s IP infrastructure grows, to OeNB its small
                  footprint and ease of use also make it the ideal tool for
                  splitting parts of their network and building smaller subnets
                  for security purposes.{' '}
                </p>
                <div className="quote">
                  <p>
                    “With the Men & Mice Suite, you always find what you are
                    looking for,” says Thomas. “It simply makes life more
                    organized”.
                  </p>
                </div>
                {/* .quote */}
              </section>
              {/* #section-4 */}
              <div className="bottom-link d-flex justify-content-between">
                <Link href="/" passHref>
                  <a className="arrow-down">download pdf</a>
                </Link>
                <Link href="/" passHref>
                  <a className="arrow-right-up">view more case studies</a>
                </Link>
              </div>
            </div>
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
                    color: #442acc;
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
                max-width: 450px;
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
              .bottom-link {
                margin-top: 70px;
              }
              a {
                font-family: 'Apercu Regular';
                font-size: 17px;
                color: #442acc;
                text-transform: uppercase;
                margin-top: 12px;
                display: inline-block;
                padding-right: 18px;
                text-decoration: none;
                &:after {
                  content: '';
                  position: relative;
                  top: 4px;
                  left: 18px;
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  background-position: center;
                }
                &:hover {
                  opacity: 0.7;
                }
                &.arrow-right-up:after {
                  background: url('/img/blue-diagonal-arrow-right-up.svg')
                    no-repeat center;
                }
                &.arrow-down:after {
                  background: url('/img/blue-arrow-down.svg') no-repeat center;
                }
              }
            }
          }
        }
      `}</style>
    </Layout>
  )
}

export default CaseStudy
