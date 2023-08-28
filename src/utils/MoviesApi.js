import { moviesUrl } from "./constants";

const checkResult = (res) => {

  if (res.ok) return res.json();

  else return Promise.reject(`${res.status} ${res.statusText}`);
};

export async function getMovies() {
  const data = await fetch(`${moviesUrl}`, {

    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return checkResult(data);
}
