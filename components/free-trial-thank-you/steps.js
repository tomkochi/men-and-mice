const Steps = () => {
  return (
    <>
      <section className="steps">
        <div className="container">
          <div className="points">
            <div className="point">
              <h3 className="f-ap-r">Step 1</h3>
              <p className="f-ap-l">
                Start your evaluation at the{" "}
                <a href="#">Men&Mice Suite Download Page</a>
              </p>
            </div>
            {/* /.point */}
            <div className="point">
              <h3 className="f-ap-r">Step 2</h3>
              <p className="f-ap-l">
                Check your inbox for step-by-step instructions to walk you
                through your trial of the Men&Mice Suite.
              </p>
            </div>
            {/* /.point */}
          </div>
          {/* /.points */}
        </div>
        {/* /.container */}
      </section>

      <style jsx>{`
        section.steps {
          .container {
            background: #ffdb00;
            padding: 100px;
            margin: 110px auto;
          }
          h2 {
            font-size: 36px;
            color: #221f20;
            line-height: 120%;
            max-width: 350px;
          }
          .points {
            .point {
              &:first-of-type {
                margin-bottom: 60px;
              }
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
                a {
                  color: #442acc;
                  text-decoration: none;
                  &:hover {
                    opacity: 0.6;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Steps;
