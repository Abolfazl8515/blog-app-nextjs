import Table from "@/ui/Table";
import UsersRow from "./UsersRow";

function LatestUsers({ users }) {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <td>#</td>
            <td>نام</td>
            <td>ایمیل</td>
            <td>تاریخ ایجاد</td>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <UsersRow users={users} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestUsers;
