import Table from "@/ui/Table";
import CategoryRow from "./CategoryRow";

async function LatestCategories({categories}) {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <td>#</td>
            <td>عنوان</td>
            <td>عنوان انگلیسی</td>
            <td>اسلاگ</td>
            <td>تاریخ ایجاد</td>
            <td>عملیات</td>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <CategoryRow categories={categories} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestCategories;
