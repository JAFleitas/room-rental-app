
import { Link } from "react-router-dom"

import SearchBar from "../../components/SearchBar/SearchBar"
import{New} from "./styled"
export default function Home() {
  return (
    <div>
      <SearchBar />
      <Link to="/form"> <New> New Rental </New> </Link>

    </div>
  )
}
