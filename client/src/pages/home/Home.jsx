import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"
import Sorters from "../../components/Filters/Sorters"
import Paginated from "../../components/paginated/paginated"

export default function Home() {
  return (
    <div>
      <Sorters />
      <AllPropertyCard />
      <Paginated />
    </div>
  )
}
