"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useState } from "react"

const Home = () => {
  
  type User = {
    id: number
    name: string
    company: any
    email: string
    phone: string
  }

  const [users, setUsers] = useState<User[]>([])

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const responseData = await res.json()
      setUsers([responseData])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <NavbarDefault />
      <HeroSection fetchData={() => {
        fetchData()
      }}/>
      <SortableTable users={users}/>
    </div>
  )
}

export default Home
