export default function createIteratorObject(report) {
  const departments = Object.values(report);

  // Flatten the employees of each department into a single array
  const allEmployees = departments.flatMap((dept) => Object.values(dept));

  let index = 0;

  // The iterator object
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
