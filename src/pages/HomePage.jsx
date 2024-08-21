import { useQuery } from "@tanstack/react-query"
import Loader from "src/components/modules/Loader"
import Main from "src/components/template/Main"
import Sidebar from "src/components/template/Sidebar"
import { getCategory } from "src/services/admin"
import { getAllPosts } from "src/services/user"

const style = {display: "flex"}

function HomePage() {
  const {data: posts, isLoading: postLoading} = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPosts
  })
  const {data: categories, isLoading: categoryLoading} = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
});

  return (
      <>
        {postLoading || categoryLoading ? <Loader/> : (
          <div style={style}>
          <Sidebar categories={categories}/>
          <Main posts={posts}/>
          </div>
        )}
      </>
  )
}

export default HomePage