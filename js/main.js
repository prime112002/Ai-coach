function muakecounter(startvalue) {
  let count = startvalue;
  return {
    increment: function () {
      count = count + 1;
    },

    decrement: function () {
      count = count - 1;
    },

    getcount: function () {
      return count;
    },
  };
}
const counter = muakecounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getcount());
console.log(counter.count);
