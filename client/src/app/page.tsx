"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useStore } from "./store"
import { Spinner } from "@material-tailwind/react"

const Home = () => {
  const users = useStore((state: any) => state.users)
  const setUsers = useStore((state: any) => state.setUsers)
  const isLoading = useStore((state: any) => state.isLoading)
  const setIsLoading = useStore((state: any) => state.setIsLoading)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const responseData = await res.json()
      setUsers([responseData])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefault />
      <HeroSection page="home"
        fetchData={() => {
          fetchData()
        }}
      />
      {isLoading ? <Spinner /> : <SortableTable users={users} />}
    </div>
  )
}

export default Home
