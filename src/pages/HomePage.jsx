import Main from "src/components/template/Main"
import Sidebar from "src/components/template/Sidebar"

const style = {display: "flex"}

function HomePage() {
  return (
    <div>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default HomePage