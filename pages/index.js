import Head from "next/head";
import Layout from "../components/Layout";
import Home from "../components/Home";
import HeaderRowContextProvider from "../contexts/home/Header-row-context";
import BlogsContextProvider from "../contexts/home/blogs-context";

export default function Index(props) {
  return (
    <HeaderRowContextProvider>
      <BlogsContextProvider>
        <Layout>
          <Head>
            <title>Men &amp; Mice</title>
          </Head>
          <Home />
        </Layout>
      </BlogsContextProvider>
    </HeaderRowContextProvider>
  );
}
