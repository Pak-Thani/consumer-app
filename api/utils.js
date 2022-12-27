import Cookies from "js-cookie";

export async function fetchGet(url) {
  const response = await fetch(url);
  
  return response.json();
}

export async function fetchGetWithToken(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${Cookies.get("token")}`,
    },
    mode: "cors",
  });
}

export async function fetchPost(url, payload) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${Cookies.get("token")}`,
    },
    mode: "cors",
  });
}

export async function putPreference(url, payload) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${Cookies.get("token")}`,
    },
    mode: "cors",
  });
}

export async function fetchPatch(url) {
  return fetch(url, {
    method: "PATCH",
  });
}

export async function fetchDelete(url) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${Cookies.get("token")}`,
    },
  });
}
