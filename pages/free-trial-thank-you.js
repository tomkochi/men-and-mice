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
    <Layout yellowfooter>
      <Head>
        <title>Men &amp; Mice - Thanks!</title>
      </Head>
      <div className="free-trial">
        <div className="body">
          <section className="hero">
            <div className="container">
              <h2 className="f-ap-r">Get in touch</h2>
              <h1 className="f-ap-b">
                Thank you for giving the Men&Mice Suite a try!
              </h1>
              <p className="f-ap-l">
                We aim to keep installation as simple and painless as possible.
                But if you have any questions or need some added support, please
                feel free to contact us at{" "}
                <a href="mailto:support@menandmice.com">
                  support@menandmice.com
                </a>
              </p>
            </div>
            {/* /.container */}
          </section>
          {/* /.hero */}

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
          {/* /.steps */}
        </div>
        {/* .body */}
      </div>
      <style jsx>{`
        .body {
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
        }
      `}</style>
    </Layout>
  );
};

export default FreeTrial;
