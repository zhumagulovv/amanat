import { roles } from "../config/roles";

export class Role {
  constructor() {
    this.roles = roles;
  }

  getRoleByName(name) {
    return this.roles.find((role) => role.name === name);
  }

  getRoles() {
    return this.roles;
  }
}
