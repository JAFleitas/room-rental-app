import React from "react"
import { Link } from "react-router-dom"
import AllPropertyCard from "../../components/AllPropertyCard/AllPropertyCard"

export default function Home() {
  return (
    <div>
      <AllPropertyCard />
      {/*  <Link to="/form"> <button> new rental </button> </Link> */}
    </div>
  )
}
