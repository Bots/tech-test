"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useBoundStore } from "./store"
import { Spinner } from "@material-tailwind/react"

const Home = () => {
  // const { users, setUsers } = useBoundStore(
  //   (state: { users: any }) => state.users
  // )
  // const { isLoading, setIsLoading } = useBoundStore(
  //   (state: { isLoading: any }) => state.isLoading
  // )

  const users = useBoundStore((state) => state.users)
  const setUsers = useBoundStore((state) => state.setUsers)
  const isLoading = useBoundStore((state) => state.isLoading)
  const setIsLoading = useBoundStore((state) => state.setIsLoading)

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
      <HeroSection
        fetchData={() => {
          fetchData()
        }}
      />
      {isLoading ? <Spinner /> : <SortableTable users={users} />}
    </div>
  )
}

export default Home
