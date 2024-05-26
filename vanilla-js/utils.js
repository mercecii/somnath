import constants from "./constants.js";

export const fetchResponse = async (url) => {
  if (!url) throw new Error("url missing in fetch");
  const body = await fetch(url);
  const response = await body.json();
  console.log("FETCH | ", response);
  return response;
};

export const fetchParallel = (urlList) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    urlList.forEach((url) => {
      promises.push(fetch(url).then((body) => body.json()));
    });
    Promise.all(promises).then((data) => resolve(data));
  });
};

export const fetchPromise = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((body) => body.json())
      .then((json) => resolve(json));
  });
};

/**
 *
 * @param {string} urlList
 * @returns {Promise[]}
 */
export const fetchParallelPromise = (urlList) => {
  let promises = [];
  urlList.forEach((url) => {
    promises.push(fetch(url).then((body) => body.json()));
  });
  return promises;
};

export const fetchParallelPromiseWithMap = (urlList) => {
  return urlList.map((url) => fetch(url).then((body) => body.json()));
};
