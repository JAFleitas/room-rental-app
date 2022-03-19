import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Link to="/form"> <button> new rental </button> </Link>
    </div>
  )
}
