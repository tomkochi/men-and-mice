import Layout from "../components/Main-layout";
import Head from "next/head";
import Hero from "../components/index/hero";
import WorkSmarter from "../components/index/work-smarter";
import FeatureImageOnLeft from "../components/index/feature-image-on-left";
import FeatureImageOnRight from "../components/index/feature-image-on-right";
import BeginIntegration from "../components/index/begin-integration";
import BottomPick from "../components/Bottom-pick";
//sloce
import Slice from "../components/Slice/slice";
import { Client } from "../prismic-configuration";

import { integrationPoints } from "../components/index/data";

const Index = ({ home }) => {
  const { hero, page_category, body } = home.data;
  //
  return (
    <Layout>
      <Head>
        <title>Men&amp;Mice</title>
      </Head>
      <div className="body">
        <Hero hero={hero} tag={page_category} />
        {body.map((element, i) => (
          <Slice props={element} key={i} />
        ))}
      </div>
      {/* /.body */}
    </Layout>
  );
};

export async function getStaticProps(context) {
  const req = context.req;
  const home = await Client(req).getSingle("homepage");
  return {
    props: {
      home,
    }, // will be passed to the page component as props
  };
}

export default Index;
