const getFilename = (url) => {
  return url.split("/").pop();
};

export const imageUrlToFile = async (imgUrl) => {
  // var imgExt = getUrlExtension(imgUrl);

  const response = await fetch(imgUrl);
  const blob = await response.blob();
  const file = new File([blob], getFilename(imgUrl), {
    type: blob.type,
  });
  return file;
};