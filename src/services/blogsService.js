const { http } = require("./httpService");

export const getBlogs = () => {
  http.get("/post/list").then(({ data }) => data.data);
};
