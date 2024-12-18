import { getBlogs } from "@/services/blogsService";
import Table from "@/ui/Table";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { DeleteButton, UpdateButton } from "./Buttons";

async function LatestPosts() {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);
  const { posts } = await getBlogs(options);
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <td>#</td>
            <td>عنوان</td>
            <td>دسته بندی </td>
            <td>نویسنده</td>
            <td>تاریخ ایجاد</td>
            <td>نوع</td>
            <td>عملیات</td>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <PostsList posts={posts} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestPosts;

const types = {
  free: { text: "رایگان", className: "badge badge--success" },
  premium: { text: "پولی", className: "badge badge--primary" },
};

function PostsList({ posts }) {
  return posts.map((post, index) => (
    <Table.Row>
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
          <DeleteButton />
        </div>
      </td>
    </Table.Row>
  ));
}
