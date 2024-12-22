import Table from "@/ui/Table";

function UsersRow({ users }) {
  return users.map((user, index) => (
    <Table.Row key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</td>
    </Table.Row>
  ));
}

export default UsersRow;
