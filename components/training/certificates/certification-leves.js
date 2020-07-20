import Link from 'next/link'

const CertificationLevels = (props) => {
  const levels = [
    {
      title: 'Certified DNS/BIND Associate',
      link: {
        name: 'DNS & BIND Fundamentals (DNSB-F)',
        url: '/',
      },
    },
    {
      title: 'DNS/CP Update Certification ',
    },
    {
      title: 'Certified DNS/BIND Professional',
      link: {
        name: 'DNS & BIND Advanced (DNSB-A)',
        url: '/',
      },
    },
    {
      title: 'Certified DNSSEC Expert ',
      link: {
        name: 'DNSSEC & BIND (DNSSEC-B)',
        url: '/',
      },
    },
    {
      title: 'Certified IPv6 Associate',
      link: {
        name: 'IPv6 Fundamentals Hands-On Workshop',
        url: '/',
      },
    },
    {
      title: 'DHCP certification',
      link: {
        name: 'DHCP Workshop',
        url: '/',
      },
    },
  ]
  return (
    <>
      <div className="certification-levels">
        <div className="container">
          <h2 className="f-ap-b">Certifaction Levels</h2>
          <div className="levels">
            {levels.map((l, i) => {
              return (
                <div className="level d-flex justify-content-between">
                  <h3 className="f-ap-m">{l.title}</h3>
                  {l.link && (
                    <Link href={l.link.url} passHref>
                      <a className="f-ap-m">
                        {l.link.name}
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
                            stroke-width="2"
                          />
                        </svg>
                      </a>
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
          {/* .levels */}
        </div>
        {/* .container */}
      </div>
      <style jsx>{`
        .certification-levels {
          margin: 120px 0;
          .container {
            max-width: 750px;
            margin: 0 auto;
            h2 {
              font-size: 56px;
              margin-bottom: 60px;
            }
            .level {
              margin-bottom: 30px;
              padding-bottom: 20px;
              &:not(:last-of-type) {
                border-bottom: 1px solid rgba(34, 31, 32, 0.1);
              }
              h3 {
                font-size: 22px;
                color: #221f20;
              }
              a {
                text-decoration: none;
                font-size: 17px;
                color: #442acc;
                text-transform: uppercase;
                transition: 0.3s;
                svg {
                  margin-left: 18px;
                }
                &:hover {
                  opacity: 0.6;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default CertificationLevels
