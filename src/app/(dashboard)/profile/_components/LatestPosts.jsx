import { getBlogs } from "@/services/blogsService";
import Table from "@/ui/Table";
import PostsRow from "./PostsRow";

async function LatestPosts({ query }) {
  const { posts } = await getBlogs(query);
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
          <PostsRow posts={posts} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestPosts;