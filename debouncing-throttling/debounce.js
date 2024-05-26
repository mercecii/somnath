// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// const debouncedInputHandler = debounce((ev) => {
//   console.log("value=", ev.target.value);
// }, 1000);

// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

// const debouncedInputHandler = debounce((event) => {
//   console.log("event.target.value", event.target.value);
// }, 1000);

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const debouncedInputHandler = debounce((event) => {
  console.log("event.target.value", event.target.value);
}, 1000);
