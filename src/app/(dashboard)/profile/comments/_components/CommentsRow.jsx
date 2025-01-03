import Table from "@/ui/Table";
import { UpdateBtn, DeleteBtn, AnswersBtn } from "./Buttons";

const types = [
  { className: "badge badge--danger", label: "رد شده" },
  { className: "badge badge--secondary", label: "در انتظار تایید" },
  { className: "badge badge--success", label: "تایید شده" },
];

function CommentsRow({ comments }) {
  return comments.map((comment, index) => (
    <Table.Row key={comment._id}>
      <td>{index + 1}</td>
      <td>{comment.content.text}</td>
      <td>{comment.user.name}</td>
      <td>{new Date(comment.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        <div className={types[comment.status].className}>
          {types[comment.status].label}
        </div>
      </td>
      <td>
        <div className="flex gap-x-3">
          <UpdateBtn comment={comment} />
          <DeleteBtn comment={comment} />
          {comment.openToComment && <AnswersBtn comment={comment} />}
        </div>
      </td>
    </Table.Row>
  ));
}

export default CommentsRow;
