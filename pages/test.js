import fetch from "node-fetch";
import { getPostData } from "../lib/posts";

export default (props) => {
  console.log(props);
  return <h1>Test</h1>;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch(
    "https://cdn.contentful.com/spaces/f2hu7yv6se6e/entries?access_token=HfXSiTbptXj38Rvatb2Jugz-xwj78UX9dfC9MylyjLg&content_type=post"
  );
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
