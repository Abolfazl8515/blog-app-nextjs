import Table from "@/ui/Table";
import { DeleteButton, UpdateButton } from "./Buttons";

const types = {
  free: { text: "رایگان", className: "badge badge--success" },
  premium: { text: "پولی", className: "badge badge--primary" },
};

function PostsRow({ posts }) {
  return posts.map((post, index) => (
    <Table.Row key={post._id}>
      <td>{index + 1}</td>
      <td>{post.title}</td>
      <td>{post.category.title}</td>
      <td>{post.author.name}</td>
      <td>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        <div className={types[post.type].className}>
          {types[post.type].text}
        </div>
      </td>
      <td>
        <div className="flex gap-x-3">
          <UpdateButton id={post._id} />
          <DeleteButton id={post._id} postTitle={post.title} />
        </div>
      </td>
    </Table.Row>
  ));
}

export default PostsRow;
