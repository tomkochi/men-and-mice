const WorkSmarter = ({ workSmarterPoints }) => {
  return (
    <>
      <section className="work-smarter">
        <div className="container">
          <h2 className="f-ap-b">
            Work
            <br />
            smarter<span>.</span>
          </h2>
          <div className="points w-100 d-flex flex-wrap justify-content-between">
            {workSmarterPoints.map((p, i) => {
              return (
                <div className="wrapper" key={i}>
                  <div className="point">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="left f-ap-l">{p.point}</div>
                      {/* /.left */}
                      <div className="right f-ap-b">
                        {p.link}
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
                      {/* /.right */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* /.points */}
        </div>
      </section>
      <style jsx>{`
        section.work-smarter {
          background: #ffdb00;
          padding: 140px 0;
          h2 {
            font-size: 64px;
            line-height: 110%;
            color: #221f20;
            margin-bottom: 10px;
            span {
              color: #442acc;
            }
          }
          .points {
            .wrapper {
              width: calc(50% - 45px);
              padding: 60px 0;
              border-bottom: 1px solid rgba(34, 31, 32, 0.16);
              &:nth-last-of-type(-n + 2) {
                border: none;
              }
            }
            .point {
              .left {
                font-size: 20px;
                color: #221f20;
                max-width: 250px;
                line-height: 150%;
              }
              .right {
                font-size: 17px;
                color: #221f20;
                text-transform: uppercase;
                cursor: pointer;
                transition: opacity 0.2s;
                white-space: nowrap;
                svg {
                  margin-left: 18px;
                  margin-top: -3px;
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
  );
};

export default WorkSmarter;
