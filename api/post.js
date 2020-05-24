import GhostContentAPI from "@tryghost/content-api";
import fetch from "node-fetch";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://hlynurhalldorsson.ghost.io",
  key: "693902285ff27989f7ad281cd8",
  version: "v3",
});

// export async function getSlugs() {
//   const rt = [];
//   api.posts.browse().then((posts) => {
//     posts.map((post) => {
//       rt.push({
//         params: {
//           slug: post.slug,
//         },
//       });
//     });
//     return rt;
//   });
// }
export async function getSlugs() {
  const res = await fetch(
    `https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/posts/?key=693902285ff27989f7ad281cd8&&fields=slug`
  );
  const { posts } = await res.json();
  return posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
}

export async function getPost(slug) {
  return await api.posts
    .read({ slug: slug }, { include: "tags" })
    .catch((err) => {
      console.error(err);
    });
}
