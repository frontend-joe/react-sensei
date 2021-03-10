export const createImageCdnLink = (filename) => {
  return `https://cdn.jsdelivr.net/gh/frontend-joe/assets@main/${filename}`;
};

export const isDev = process.env.NODE_ENV === "development";
