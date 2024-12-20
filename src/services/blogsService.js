import http from "./httpService";

export const getBlogs = async (options = {}, queries) => {
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

export const getSingleBlogById = async (id) => {
  return http
    .get(`/post/${id}`)
    .then(({ data }) => data.data)
    .catch((err) => err);
};

export const editBlogApi = async ({ id, data }) => {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
};

export const DeleteBlogApi = async (id, options) => {
  return http
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
};

export const likePostApi = async (id) => {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
};

export const bookmarkPostApi = async (id) => {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
};

export const createCommentApi = async (data, options) => {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
};

export async function getAllCommentsApi(options = {}) {
  return http.get(`/comment/list`, options).then(({ data }) => data.data);
}
