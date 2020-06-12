import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://ghost.menandmice.com",
  key: "346f6cf0c1f42cf4114d9e533c",
  version: "v3",
});

export async function getSlugs() {
  const posts = await api.posts.browse({ fields: "slug" });
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
