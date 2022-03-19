import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar"
import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"

export default function Home() {
  return (
    <div>
      <SearchBar />
      <AllPropertyCard/>
      <Link to="/form"> <button> new rental </button> </Link>
    </div>
  )
}
