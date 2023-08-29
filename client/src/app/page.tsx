"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useStore } from "./store"
import { Spinner } from "@material-tailwind/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
      toast.success(
        "Data has been fetched from the external API and commited to app state. Please continue to the 'save' page in order to save the data to the database.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      )
    } catch (error) {
      toast.error(`Something has gone wrong: ${error}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <NavbarDefault />
      <HeroSection
        page="home"
        fetchData={() => {
          fetchData()
        }}
      />
      {isLoading ? <Spinner /> : <SortableTable users={users} />}
      <ToastContainer />
    </div>
  )
}

export default Home
