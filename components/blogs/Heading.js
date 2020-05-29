const Heading = () => {
  return (
    <>
      <div className="heading-wrapper">
        <h1>
          Your weekly <span>Tech News</span>
        </h1>
        <h2>The Mousepad</h2>
      </div>
      <style jsx>{`
        .heading-wrapper {
          padding: 120px 0;
          @media (max-width: 992px) {
            padding: 30px 0;
          }
        }
        h1 {
          font-family: "Apercu Regular";
          font-size: 48px;
          color: #bdbcbc;
          @media (max-width: 992px) {
            font-size: 24px;
          }
        }
        h1 span {
          font-family: "Apercu Medium";
          color: #ffffff;
        }
        h2 {
          font-family: "Apercu Bold";
          font-size: 48px;
          color: #ffdb00;
          @media (max-width: 992px) {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
};

export default Heading;
