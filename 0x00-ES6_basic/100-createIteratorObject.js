export default function createIteratorObject(report) {
  const departments = Object.values(report);

  // Flatten the employees of each department into a single array
  const allEmployees = departments.flatMap((dept) => Object.values(dept));

  let index = 0;

  // The iterator object
  const iterator = {
    next() {
      if (index < allEmployees.length) {
        // If there are employees left, return the next one
        return { value: allEmployees[index++], done: false };
      } else {
        // If all employees have been traversed, return done:true
        return { done: true };
      }
    },
  };

  // Make the iterator iterable by adding Symbol.iterator method
  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
