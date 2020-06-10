import Layout from "../components/Main-layout";
import Head from "next/head";
import Hero from "../components/index/hero";
import WorkSmarter from "../components/index/work-smarter";
import FeatureImageOnLeft from "../components/index/feature-image-on-left";
import FeatureImageOnRight from "../components/index/feature-image-on-right";
import BeginIntegration from "../components/index/begin-integration";
import BottomPick from "../components/Bottom-pick";
import { Client } from "../prismic-configuration";

import { workSmarterPoints, integrationPoints } from "../components/index/data";

const Index = ({ home }) => {
  console.log(home.data);
  const { hero, tag } = home.data;

  return (
    <Layout>
      <Head>
        <title>Men&amp;Mice</title>
      </Head>
      <div className="body">
        <Hero hero={hero} tag={tag} />

        <WorkSmarter workSmarterPoints={workSmarterPoints} />

        <FeatureImageOnRight />

        <FeatureImageOnLeft />

        <BeginIntegration integration-points={integrationPoints} />

        <BottomPick
          category="Case study"
          heading="Integrated layers"
          text="Knowing who did what, when and where on the network helps network and cyber security teams."
          image="/img/feature-1.png"
          image-text="Case study"
        />
      </div>
      {/* /.body */}
    </Layout>
  );
};

export async function getStaticProps(context) {
  const req = context.req;
  const home = await Client(req).getSingle("home");
  return {
    props: {
      home,
    }, // will be passed to the page component as props
  };
}

export default Index;
