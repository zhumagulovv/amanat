export class EmployeesService {
  constructor() {
    this.employees = [
      {
        id: 1,
        name: "Zhakyp",
        role: "manager",
        salary: 50000,
        phoneNumber: "0774814583",
      },
      {
        id: 2,
        name: "Asan",
        role: "assistant",
        salary: 40000,
        phoneNumber: "0779797979",
      },
    ];
  }

  createEmployee(employee) {
    if (
      !employee.name ||
      !employee.role ||
      !employee.salary ||
      !employee.phoneNumber
    ) {
      throw new Error("Имя, роль, зарплата и номер телефона обязательны");
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

  updateEmployee(id, updatedUser) {
    const employee = this.employees.find((u) => u.id === parseInt(id));

    if (!employee) {
      throw new Error("Работник не найден");
    }
    const { name, role, salary, phoneNumber } = updatedUser;

    if (name) employee.name = name;
    if (role) employee.role = role;
    if (salary) employee.salary = salary;
    if (phoneNumber) employee.phoneNumber = phoneNumber;

    return employee;
  }

  deleteEmployee(id) {
    const userIndexDelete = this.employees.findIndex(
      (d) => d.id === parseInt(id)
    );
    if (userIndexDelete === -1) {
      throw new Error("Работник не найден");
    }
    this.employees.splice(userIndexDelete, 1);
    return { message: "Работник удален" };
  }
}
