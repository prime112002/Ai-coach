console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);
setTimeout(() => {
  console.log("c");
}, 0);
console.log("D");
