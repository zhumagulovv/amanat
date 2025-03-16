export const roles = [
  {
    id: 1,
    name: "director",
    permissions: [
      "create_record",
      "read_record",
      "update_record",
      "delete_record",
    ],
  },
  {
    id: 2,
    name: "Sales",
    permissions: [
      "create_record",
      "read_record",
      "update_record",
      "delete_record",
    ],
  },
  {
    id: 3,
    name: "Education",
    permissions: ["read_record", "delete_record"],
  },
  {
    id: 4,
    name: "Finace",
    permissions: ["read_record"],
  },
  {
    id: 5,
    name: "HR",
    permissions: ["create_record", "read_record"],
  },
];
