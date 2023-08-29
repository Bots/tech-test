"use client"

import { NavbarDefault } from "@/components/Navbar"
import { HeroSection } from "@/components/Hero"
import { SortableTable } from "@/components/Table"
import { useStore } from "../store"
import { Spinner } from "@material-tailwind/react"
import { useEffect } from "react"

const Save = () => {

  const users = useStore((state: any) => state.users)
  const isLoading = useStore((state: any) => state.isLoading)

  useEffect(() => {
    useStore.persist.rehydrate()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <NavbarDefault />
      <HeroSection page="save"/>
      {isLoading ? <Spinner /> : <SortableTable users={users} />}
    </div>
  )
}

export default Save
