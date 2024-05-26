import constants from "./constants.js";
import { fetchParallelPromise, fetchPromise } from "./utils.js";

export default async function init() {
  const response = await fetchPromise(constants.peopleUrl);
  response.results.forEach(async (result) => {
    result.films = await Promise.all(fetchParallelPromise(result.films));
  });
  console.log("people=", response);

  //////
  const createThForPeople = (peopleObj) => {
    const tableDataCells = Object.keys(peopleObj)
      .filter((el) => typeof peopleObj[el] === "string")
      .reduce((acc, el) => acc + `<th>${el}</th>`, "");
    return `<thead>${tableDataCells}</thead>`;
  };
  const createTrForPeople = (peopleObj) => {
    const tableDataCells = Object.values(peopleObj)
      .filter((el) => typeof el === "string")
      .reduce((acc, el) => acc + `<td>${el}</td>`, "");
    console.log(tableDataCells);
    return "<tr>" + tableDataCells + "</tr>";
  };

  const myTable = `
    <table>${createThForPeople(response.results[0])}${response.results.map(
    createTrForPeople
  )}</table>
    `;
  console.log("temp = ", myTable);
  document.querySelector("#root").innerHTML = myTable;
}
