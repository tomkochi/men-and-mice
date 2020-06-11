const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h2 className="f-ap-r">Get in touch</h2>
          <h1 className="f-ap-b">
            Start your free trial<span>.</span>
          </h1>
          <p className="f-ap-l">
            Try our API-driven, software-defined modular overlay solution for IP
            Management in a multicloud network environment.
          </p>
          <h2 className="f-ap-r">
            Sign up for a free trial{" "}
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.818482 7.98086L6.9971 14.1595M6.9971 14.1595L13.1757 7.98086M6.9971 14.1595L6.99639 0.159424"
                stroke="#442ACC"
                strokeWidth="2"
              />
            </svg>
          </h2>
        </div>
        {/* /.container */}
      </section>
      <style jsx>{`
        section.hero {
          min-height: calc(100vh - 138px);
          padding: 120px 0;
          h2 {
            font-size: 16px;
            color: #442acc;
            text-transform: uppercase;
            margin-bottom: 40px;
            svg {
              margin-left: 18px;
            }
          }
          h1 {
            font-size: 64px;
            color: #221f20;
            line-height: 120%;
            max-width: 420px;
            margin-bottom: 24px;
          }
          p {
            font-size: 20px;
            color: #221f20;
            max-width: 420px;
            margin-bottom: 50px;
            line-height: 150%;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
