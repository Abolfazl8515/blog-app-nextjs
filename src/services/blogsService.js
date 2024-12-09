const { http } = require("./httpService");

export const getBlogs = (options) => {
  return http.get("/post/list",options).then(({ data }) => data.data);
};

export const getSingleBlog = (slug) => {
  return http
    .get(`/post/slug/${slug}`)
    .then(({ data }) => data.data)
    .catch((err) => err);
};

export const likePostApi = (id) => {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
};

export const bookmarkPostApi = (id) => {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
};
