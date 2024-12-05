const { http } = require("./httpService");

export const getBlogs = () => {
  return http.get("/post/list").then(({ data }) => data.data);
};

export const getSingleBlog = (slug) => {
  return http
    .get(`/post/slug/${slug}`)
    .then(({ data }) => data.data)
    .catch((err) => err);
};
