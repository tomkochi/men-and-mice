const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h2 className="f-ap-r">Get in touch</h2>
          <h1 className="f-ap-b">
            Thank you for giving the Men&Mice Suite a try!
          </h1>
          <p className="f-ap-l">
            We aim to keep installation as simple and painless as possible. But
            if you have any questions or need some added support, please feel
            free to contact us at{" "}
            <a href="mailto:support@menandmice.com">support@menandmice.com</a>
          </p>
        </div>
        {/* /.container */}
      </section>

      <style jsx>{`
        section.hero {
          padding: 140px 0 50px 0;
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
            max-width: 800px;
            margin-bottom: 24px;
          }
          p {
            font-size: 20px;
            color: #221f20;
            max-width: 800px;
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
      `}</style>
    </>
  );
};

export default Hero;
