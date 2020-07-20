const StartTrialPoints = ({ 'free-trial-points': freeTrialPoints }) => {
  return (
    <>
      <section className="start-trial-points">
        <div className="container">
          <h2 className="f-ap-b">Start your 30 day free trial and enjoy</h2>
          <div className="points d-flex flex-wrap justify-content-between">
            {freeTrialPoints.map((p, i) => {
              return (
                <div className="wrapper" key={i}>
                  <div className="point">
                    <h3 className="f-ap-r">{p.heading}</h3>
                    <p className="f-ap-l">{p.description}</p>
                  </div>
                  {/* /.point */}
                </div>
              )
            })}
          </div>
          {/* /.points */}
        </div>
        {/* /.container */}
      </section>
      <style jsx>{`
        section.start-trial-points {
          background: white;
          margin: 120px 0;
          h2 {
            font-size: 36px;
            color: #221f20;
            line-height: 120%;
            max-width: 350px;
          }
          .points {
            .wrapper {
              width: calc(100% / 3 - 80px);
              .point {
                margin-top: 80px;
                width: 100%;
                h3 {
                  font-size: 20px;
                  color: #000000;
                  line-height: 170%;
                  margin-bottom: 16px;
                }
                p {
                  font-size: 18px;
                  color: #000000;
                  line-height: 150%;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default StartTrialPoints
