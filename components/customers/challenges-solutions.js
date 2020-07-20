const ChallengesSolutions = () => {
  return (
    <>
      <section className="challenges-solutions">
        <div className="container">
          <div className="points d-flex justify-content-between">
            <div className="wrapper">
              <div className="point">
                <h2 className="f-ap-b">Challenges</h2>
                <p className="f-ap-l">
                  Realizing they had a single point of failure, this European
                  media services company decided it needed to invest in a second
                  DNS vendor for redundancy and looked to NS1’s Dedicated DNS
                  solution.
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
      <style jsx>{`
        section.challenges-solutions {
          margin-top: 180px;
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
              content: '';
              position: absolute;
              right: calc(50% + 100px);
              top: 47%;
              display: block;
              width: 14px;
              height: 14px;
              background: url('/img/black-arrow-right.svg') no-repeat center;
            }
            .wrapper {
              width: 50%;
              .point {
                width: calc(100% - 200px);
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default ChallengesSolutions
