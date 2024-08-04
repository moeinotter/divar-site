import CategoryForm from "src/components/template/CategoryForm"
import CategoryList from "src/components/template/CategoryList"

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  )
}

export default AdminPage