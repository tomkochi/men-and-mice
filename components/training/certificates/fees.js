import Link from 'next/link'

const Fees = (props) => {
  const courses = [
    {
      title: 'DNS/CA - Certified DNS/BIND Associate',
      fee: 275,
    },
    {
      title: 'DNS/CP Update Certification',
      fee: 199,
    },
    {
      title: 'DDNS/CP - Certified DNS/BIND Professional',
      fee: 350,
    },
    {
      title: 'DNS/CDE - Certified DNSSEC Expert',
      fee: 350,
    },
    {
      title: 'IPv6/CA - Certified IPv6 Associate',
      fee: 295,
    },
  ]
  return (
    <>
      <div className="fees">
        <div className="container">
          <h2 className="f-ap-b">Fees</h2>
          <div className="levels">
            {courses.map((c, i) => {
              return (
                <div className="course d-flex justify-content-between">
                  <h3 className="f-ap-m">{c.title}</h3>
                  <h4 className="f-ap-m">{c.fee}</h4>
                </div>
              )
            })}
          </div>
          {/* .levels */}
        </div>
        {/* .container */}
      </div>
      <style jsx>{`
        .fees {
          margin: 120px 0;
          .container {
            max-width: 750px;
            margin: 0 auto;
            h2 {
              font-size: 56px;
              margin-bottom: 60px;
            }
            .course {
              margin-bottom: 30px;
              padding-bottom: 20px;
              &:not(:last-of-type) {
                border-bottom: 1px solid rgba(34, 31, 32, 0.1);
              }
              h3 {
                font-size: 22px;
                color: #221f20;
              }
              h4 {
                text-decoration: none;
                font-size: 17px;
                color: #442acc;
                text-transform: uppercase;
                &:before {
                  content: '$';
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Fees
