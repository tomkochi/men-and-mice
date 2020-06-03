import Head from "next/head";
import Layout from "../../components/Blogs-layout";
import Blogs from "../../components/Blogs";
import HeaderRowContextProvider from "../../contexts/Header-row-context";
import BlogsContextProvider from "../../contexts/blogs-context";

export default function Index(props) {
  return (
    <HeaderRowContextProvider>
      <BlogsContextProvider>
        <Layout>
          <Head>
            <title>Men &amp; Mice - Blog</title>
            <style>{"body { background-color: #221f20; }"}</style>
          </Head>
          <Blogs />
        </Layout>
      </BlogsContextProvider>
    </HeaderRowContextProvider>
  );
}
