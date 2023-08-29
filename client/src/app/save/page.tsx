"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useState } from "react"

const Save = () => {
  
  type User = {
    id: number
    name: string
    company: any
    email: string
    phone: string
  }

  const [users, setUsers] = useState<User[]>([])

  console.log(users)

  return (
    <div className="flex flex-col items-center">
      <NavbarDefault />
      <HeroSection />
      <SortableTable users={users}/>
    </div>
  )
}

export default Save
