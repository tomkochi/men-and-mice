import Head from "next/head";
import Body from "./home/body";

const Home = () => {
  return (
    <div className="home">
      <Head>
        <title>M&M</title>
      </Head>
      <div className="heading-wrapper">
        <h1>
          Your weekly <span>Tech News</span>
        </h1>
        <h2>The Mousepad</h2>
      </div>

      <Body />

      <style jsx>{`
        .heading-wrapper {
          padding: 120px 0;
        }
        h1 {
          font-family: "Apercu Regular";
          font-size: 48px;
          color: #bdbcbc;
        }
        h1 span {
          font-family: "Apercu Medium";
          color: #ffffff;
        }
        h2 {
          font-family: "Apercu Bold";
          font-size: 48px;
          color: #ffdb00;
        }
        @media (max-width: 992px) {
          .heading-wrapper {
            padding: 100px 0;
          }
          h1,
          h2 {
            font-size: 40px;
          }
        }
        @media (max-width: 992px) {
          .heading-wrapper {
            padding: 30px 0;
          }
          h1 {
            font-size: 24px;
          }
          h2 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
