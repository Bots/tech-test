"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useStore } from "../store"
import { Spinner } from "@material-tailwind/react"
import { useEffect } from "react"
import { toast } from "react-toastify"

const Save = () => {
  const users = useStore((state: any) => state.users)
  const isLoading = useStore((state: any) => state.isLoading)
  const setIsLoading = useStore((state: any) => state.setIsLoading)

  useEffect(() => {
    useStore.persist.rehydrate()
  }, [])

  const saveData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("http://localhost:3000/api/v1/save", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users[0]),
      })
      const responseData = await res.json()
      if (responseData.success) {
        toast.success("Data has been saved to the database.", {
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
    } catch (error) {
      toast.error(`Data could not be saved to the database: ${error}`, {
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
        page="save"
        saveData={() => {
          return saveData()
        }}
      />
      {isLoading ? <Spinner /> : <SortableTable users={users} />}
    </div>
  )
}

export default Save
