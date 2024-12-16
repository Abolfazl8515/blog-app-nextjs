import http from "./httpService";

export const getBlogs = async (options, queries) => {
  return http
    .get(`/post/list?${queries}`, options)
    .then(({ data }) => data.data);
};

export const getSingleBlog = async (slug) => {
  return http
    .get(`/post/slug/${slug}`)
    .then(({ data }) => data.data)
    .catch((err) => err);
};

export const likePostApi = async (id) => {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
};

export const bookmarkPostApi =  async (id) => {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
};

export const createCommentApi = async (data, options) => {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
};
