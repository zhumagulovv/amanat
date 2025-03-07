export class EmployeeService {
  constructor() {
    this.employees = [
      {
        id: 1,
        name: "Zhakyp",
        departament: "manager",
        salary: 50000,
        phoneNumber: "0774814583",
      },
      {
        id: 2,
        name: "Asan",
        departament: "assistant",
        salary: 40000,
        phoneNumber: "0779797979",
      },
    ];
  }

  createEmployee(employee) {
    if (
      !employee.name ||
      !employee.departament ||
      !employee.salary ||
      !employee.phoneNumber
    ) {
      throw new Error(
        "Имя, департамент, зарплата и номер телефона обязательны"
      );
    }

    const newEmployee = { id: this.employees.length + 1, ...employee };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployeeById(id) {
    const employee = this.employees.find((u) => u.id === parseInt(id));

    if (!employee) {
      throw new Error("Работник не найден");
    }

    return employee;
  }

  updateEmployee(id, updatedEmployee) {
    const employee = this.employees.find((u) => u.id === parseInt(id));

    if (!employee) {
      throw new Error("Работник не найден");
    }
    const { name, departament, salary, phoneNumber } = updatedEmployee;

    if (name) employee.name = name;
    if (departament) employee.departament = departament;
    if (salary) employee.salary = salary;
    if (phoneNumber) employee.phoneNumber = phoneNumber;

    return employee;
  }

  deleteEmployee(id) {
    const employeeIndexDelete = this.employees.findIndex(
      (d) => d.id === parseInt(id)
    );
    if (employeeIndexDelete === -1) {
      throw new Error("Работник не найден");
    }
    this.employees.splice(employeeIndexDelete, 1);
    return { message: "Работник удален" };
  }
}
