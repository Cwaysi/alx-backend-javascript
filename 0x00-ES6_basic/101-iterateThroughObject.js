export default function createIteratorObject(report) {
  const departments = Object.values(report);


  const allEmployees = departments.flatMap((dept) => Object.values(dept));

  let index = 0;


  const iterator = {
    next() {
      if (index < allEmployees.length) {
        return { value: allEmployees[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
  
  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
