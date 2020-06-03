import Head from "next/head";
import Layout from "../components/Main-layout";
import Link from "next/link";
import { useState } from "react";

const FreeTrial = () => {
  const [freeTrialPoints, setFreeTrialPoints] = useState([
    {
      heading: "Integration",
      description:
        "Plug in your existing networks easily and without disruption",
    },
    {
      heading: "Transparency",
      description: "Quickly visualize bottlenecks and locate inefficiencies",
    },
    {
      heading: "Automation",
      description: "Steer all your environments with a single, unified API",
    },
    {
      heading: "Cost efficiency",
      description: "Free for 30 days, pricing based on active resources after",
    },
    {
      heading: "Security",
      description: "Keep your networks secure with role-based access control",
    },
    {
      heading: "Control",
      description:
        "Your network, your way: no appliances or pre-set control schemes",
    },
  ]);
  return (
    <Layout>
      <Head>
        <title>Men &amp; Mice - Case study</title>
      </Head>
      <div className="free-trial">
        <div className="body">
          <section className="hero">
            <div className="container">
              <h2 className="f-ap-r">Get in touch</h2>
              <h1 className="f-ap-b">
                Start your free trial<span>.</span>
              </h1>
              <p className="f-ap-l">
                Try our API-driven, software-defined modular overlay solution
                for IP Management in a multicloud network environment.
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
          {/* /.hero */}

          <section className="start-trial-points">
            <div className="container">
              <h2 className="f-ap-b">Start your 30 day free trial and enjoy</h2>
              <div className="points d-flex flex-wrap justify-content-between">
                {freeTrialPoints.map((p, i) => {
                  return (
                    <div className="wrapper">
                      <div className="point">
                        <h3 className="f-ap-r">{p.heading}</h3>
                        <p className="f-ap-l">{p.description}</p>
                      </div>
                      {/* /.point */}
                    </div>
                  );
                })}
              </div>
              {/* /.points */}
            </div>
            {/* /.container */}
          </section>
          {/* /.start-trial-points */}

          <section className="form">
            <div className="container">
              <h4>Form here</h4>
            </div>
            {/* /.container */}
          </section>
          {/* /.form */}
        </div>
        {/* .body */}
      </div>
      <style jsx>{`
        .body {
          section.hero {
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

          section.start-trial-points {
            background: #ffdb00;
            padding: 140px 0;
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

          section.form {
            padding: 140px 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default FreeTrial;
