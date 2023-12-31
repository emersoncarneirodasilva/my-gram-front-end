// export const api = "http://localhost:9001/api";
// export const uploads = "http://localhost:9001/uploads";

export const api = "https://my-gram-back-end.vercel.app/api";
export const uploads = "https://my-gram-back-end.vercel.app/uploads";

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
