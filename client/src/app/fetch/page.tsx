"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useStore } from "../store"
import { Spinner } from "@material-tailwind/react"
import { useState } from "react"
import { toast } from "react-toastify"

type User = {
  id: number
  name: string
  company: any
  email: string
  phone: string
}

const Fetch = () => {
  const isLoading = useStore((state: any) => state.isLoading)
  const setIsLoading = useStore((state: any) => state.setIsLoading)
  const [users, setUsers] = useState([])

  const fetchDBData = () => {
    setIsLoading(true)
    try {
      fetch("http://localhost:3000/api/v1/fetch", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setUsers(json)
          console.log(users)
          if (json.success) {
            toast.success("Data has been fetched from the database.", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          }
        })
    } catch (error) {
      toast.error(`Data could not be fetched from the database: ${error}`, {
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
        page="fetch"
        fetchDBData={() => {
          fetchDBData()
        }}
      />
      {isLoading ? <Spinner /> : <SortableTable dbUsers={users} />}
    </div>
  )
}

export default Fetch
