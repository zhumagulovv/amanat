export class UsersService {
  constructor() {
    this.users = [
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

  createUser(user) {
    if (!user.name || !user.role || !user.salary || !user.phoneNumber) {
      throw new Error("Имя, роль, зарплата и номер телефона обязательны");
    }

    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    const user = this.users.find((u) => u.id === parseInt(id));

    if (!user) {
      throw new Error("Работник не найден");
    }

    return user;
  }

  updateUser(id, updatedUser) {
    const user = this.users.find((u) => u.id === parseInt(id));

    if (!user) {
      throw new Error("Работник не найден");
    }
    const { name, role, salary, phoneNumber } = updatedUser;

    if (name) user.name = name;
    if (role) user.role = role;
    if (salary) user.salary = salary;
    if (phoneNumber) user.phoneNumber = phoneNumber;

    return user;
  }

  deleteUser(id) {
    const userIndexDelete = this.users.findIndex((d) => d.id === parseInt(id));
    if (userIndexDelete === -1) {
      throw new Error("Работник не найден");
    }
    this.users.splice(userIndexDelete, 1);
    return { message: "Работник удален" };
  }
}
