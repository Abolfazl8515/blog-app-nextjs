import http from "./httpService";

export const getCategories = async () => {
  return http.get("/category/list").then(({ data }) => data.data);
};

export const getCategoryById = async (id) => {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
};

export const addCategoryApi = async (data) => {
  return http.post("/category/add", data).then(({ data }) => data.data);
};

export const editCategoryApi = async ({ id, data }) => {
  return http
    .patch(`/category/update/${id}`, data)
    .then(({ data }) => data.data);
};

export const deleteCategoryApi = async (id,options) => {
  return http.delete(`/category/remove/${id}`,options).then(({ data }) => data.data);
};
