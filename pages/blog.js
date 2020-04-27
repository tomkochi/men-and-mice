import Layout from "../components/Layout";
import Body from "../components/blog/body";

export default function Index() {
  return (
    <Layout>
      <>
        <div className="blog">
          <Body />
        </div>
      </>
    </Layout>
  );
}
