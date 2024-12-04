const { http } = require("./httpService");

export const getBlogs = () => {
  return http.get("/post/list").then(({ data }) => data.data);
};
