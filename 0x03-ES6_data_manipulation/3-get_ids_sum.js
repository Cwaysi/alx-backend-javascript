export default getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);


