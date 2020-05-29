import Head from "next/head";
import Layout from "../components/Blogs-layout";
import Home from "../components/Blogs";
import HeaderRowContextProvider from "../contexts/home/Header-row-context";
import BlogsContextProvider from "../contexts/home/blogs-context";

export default function Index(props) {
  return (
    <HeaderRowContextProvider>
      <BlogsContextProvider>
        <Layout>
          <Head>
            <title>Men &amp; Mice - Blog</title>
          </Head>
          <Home />
        </Layout>
      </BlogsContextProvider>
    </HeaderRowContextProvider>
  );
}
