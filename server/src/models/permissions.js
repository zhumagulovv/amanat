import { roles } from "../config/roles";

export class Permissions {
  constructor() {
    this.permissions = [];
  }

  getPermissionsByRoleName(roleName) {
    const role = roles.find((role) => role.name === roleName);

    return role ? role.permissions : [];
  }
}
