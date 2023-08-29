"use client"

import { useEffect, useState } from "react"
import { NavbarDefault } from "@/components/Navbar"

type User = {
  id: number
  name: string
  company: string
  email: string
  phone: string
}

const Home = () => {
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const responseData = await res.json()
        setData(responseData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <NavbarDefault />
      {data.map((user) => (
        <div key={user.id}>
          <h1 className="text-3xl">{user.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home
