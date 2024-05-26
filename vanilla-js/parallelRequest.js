import constants from "./constants.js";
import {
  fetchPromise,
  fetchParallelPromise,
  fetchParallelPromiseWithMap,
  fetchParallel,
} from "./utils.js";

export default function init() {
  console.log("parallelRequest init");
  fetchPromise(constants.peopleUrl).then((json) =>
    console.log("Promise fetch", json)
  );
  // These all are true
  // let promises = fetchParallelPromise(urls);
  // let promises = fetchParallelPromiseWithMap(urls);
  // Promise.all(promises).then((all) => console.log("all = ", all));

  let allPromise = fetchParallel(urls);
  allPromise.then((all) => console.log("all =", all));
}

const urls = [
  "https://swapi.py4e.com/api/films/1/",
  "https://swapi.py4e.com/api/films/2/",
  "https://swapi.py4e.com/api/films/3/",
  "https://swapi.py4e.com/api/films/6/",
  "https://swapi.py4e.com/api/films/7/",
];
