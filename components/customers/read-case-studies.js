const ReadCaseStudies = ({ "case-studies": caseStudies }) => {
  return (
    <>
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
      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default ReadCaseStudies;
