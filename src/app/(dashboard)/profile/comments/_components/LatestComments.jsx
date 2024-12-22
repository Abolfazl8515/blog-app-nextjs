import Table from "@/ui/Table";
import CommentsRow from "./CommentsRow";

function LatestComments({ comments }) {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <td>#</td>
            <td>متن</td>
            <td>نویسنده</td>
            <td>تاریخ ایجاد</td>
            <td>وضعیت</td>
            <td>عملیات</td>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <CommentsRow comments={comments} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestComments;
