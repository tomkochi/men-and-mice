import Layout from "../components/Main-layout";
import { useState } from "react";
import Head from "next/head";
import Hero from "../components/customers/hero";
import ChallengesSolutions from "../components/customers/challenges-solutions";
import Features from "../components/customers/features";
import ReadCaseStudies from "../components/customers/read-case-studies";
import BottomPick from "../components/Bottom-pick";
import { caseStudies } from "../components/customers/data";

const Customers = () => {
  return (
    <Layout>
      <Head>
        <title>Men&amp;Mice</title>
      </Head>
      <div className="body">
        <Hero />

        <ChallengesSolutions />

        <Features />

        <ReadCaseStudies case-studies={caseStudies} />

        <BottomPick
          category="Get in touch"
          heading="Operate smarter"
          text="Knowing who did what, when and where on the network helps network and cyber security teams."
          image="/img/feature-1.png"
          image-text="Get a price quote"
        />
      </div>
      {/* /.body */}
    </Layout>
  );
};

export default Customers;
