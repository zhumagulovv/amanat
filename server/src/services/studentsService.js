export class StudentsService {
  constructor() {
    this.students = [
      {
        id: 1,
        fullName: "Asanov Asan",
        phoneNumber: +996777777777,
        parentFullName: "Maratov Marat",
        parentPhoneNumber: +996777767676,
        group: "1-group",
      },
      {
        id: 2,
        fullName: "Usonov Uson",
        phoneNumber: +996777757575,
        parentFullName: "Tima Marat",
        parentPhoneNumber: +996777747474,
        group: "2-group",
      },
    ];
  }

  getAllStudents() {
    return this.students;
  }

  getStudentById(id) {
    const student = this.students.find((s) => s.id === parseInt(id));

    if (!student) {
      throw new Error("Студент не найден!");
    }

    return student;
  }

  createStudent(student) {
    if (
      !student.fullName ||
      !student.phoneNumber ||
      !student.parentFullName ||
      !student.parentPhoneNumber ||
      !student.group
    ) {
      throw new Error("Все поля обязательны заполнить");
    }

    const newStudent = { id: this.students.length + 1, ...student };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id, updatedStudent) {
    const student = this.students.find((s) => s.id === parseInt(id));

    if (!student) {
      throw new Error("Студент не найден!");
    }

    const { fullName, phoneNumber, parentFullName, parentPhoneNumber, group } =
      updatedStudent;

    if (fullName) student.fullName = fullName;
    if (phoneNumber) student.phoneNumber = phoneNumber;
    if (parentFullName) student.parentFullName = parentFullName;
    if (parentPhoneNumber) student.parentPhoneNumber = parentPhoneNumber;
    if (group) student.group = group;

    return student;
  }

  deleteStudent(id) {
    const studentIndexDelete = this.students.findIndex(
      (s) => s.id === parseInt(id)
    );

    if (studentIndexDelete === -1) {
      throw new Error("Студент не найден!");
    }

    this.students.splice(studentIndexDelete, 1);
    return { message: "Студент удален!" };
  }
}
