import constants from "./constants.js";
import { fetchResponse } from "./init.js";

const generateLIs = (response) => {
  const list = response.results.reduce(
    (accumulator, el) =>
      accumulator + `<option value="${el.url}">${el.name}</option>`,
    ""
  );
  return `<select id="pokelist">${list}</select><ul id="abilities-ul"></ul>`;
};

const onSelectHandler = async (e) => {
  const pokeDetails = await fetchResponse(e.target.value);
  const abilities = pokeDetails.abilities.reduce(
    (accumulator, el) => accumulator + `<li>${el.ability.name}</li>`,
    ""
  );
  document.querySelector("#abilities-ul").innerHTML = abilities;
};

export default async function init() {
  const response = await fetchResponse(constants.pokelistUrl);
  document.querySelector("#root").innerHTML = generateLIs(response);
  document
    .querySelector("#pokelist")
    .addEventListener("change", onSelectHandler);
}
