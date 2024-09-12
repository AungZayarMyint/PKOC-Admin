import { errorToaster } from "../utils/Helper";

export const getMethod = async (api, token = "") => {
  try {
    const res = await fetch(`${api}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (res.status === 401) {
      localStorage.removeItem("token");
      errorToaster("Session expired. Please log in again!");
      window.location.href("/login");
    }

    return res;
  } catch (error) {
    errorToaster(error.message);
  }
};

export const postMethod = async (api, data, token = "") => {
  try {
    const res = await fetch(`${api}`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.status === 401) {
      localStorage.removeItem("token");
      errorToaster("Session expired. Please log in again!");
      window.location.href("/login");
    }

    return res;
  } catch (error) {
    errorToaster(error.message);
  }
};

export const postMethodUpload = async (api, data, token = "") => {
  try {
    const res = await fetch(`${api}`, {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    }).then((res) => res.json());

    if (res.status === 401) {
      localStorage.removeItem("token");
      errorToaster("Session expired. Please log in again!");
      window.location.href("/login");
    }

    return res;
  } catch (error) {
    errorToaster(error.message);
  }
};

export const deleteMethod = async (api, token = "") => {
  try {
    const res = await fetch(`${api}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (res.status === 401) {
      localStorage.removeItem("token");
      errorToaster("Session expired. Please log in again!");
      window.location.href("/login");
    }

    return res;
  } catch (error) {
    errorToaster(error.message);
  }
};
