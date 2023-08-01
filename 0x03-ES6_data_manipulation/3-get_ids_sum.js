export default function getStudentIdsSum(students) {
  return students.reduce((agii, student) => agii + student.id, 0);
}


