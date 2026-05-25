// src/utils/api.js
import { getToken } from "./auth";

export const apiFetch = (url, options = {}) => {
  const token = getToken();
  return fetch(`http://localhost:3001${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });
};
