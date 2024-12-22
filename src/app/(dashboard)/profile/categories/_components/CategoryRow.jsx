import Table from "@/ui/Table";
import { DeleteBtn, UpdateBtn } from "./Buttons";

function CategoryRow({ categories }) {
  return categories.map((category, index) => (
    <Table.Row key={category._id}>
      <td>{index + 1}</td>
      <td>{category.title}</td>
      <td>{category.englishTitle}</td>
      <td>{category.slug}</td>
      <td>{new Date(category.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        <div className="flex gap-x-3">
          <UpdateBtn category={category} />
          <DeleteBtn category={category} />
        </div>
      </td>
    </Table.Row>
  ));
}

export default CategoryRow;
