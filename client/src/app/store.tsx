import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

type User = {
  id: number
  name: string
  company: any
  email: string
  phone: string
}

interface StoreState {
  users: User[]
  setUsers: (users: User[]) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        users: [],
        setUsers: (users) => {
          set(() => {
            users = users
            return { users }
          })
        },
        isLoading: false,
        setIsLoading: (isLoading) => {
          set(() => {
            isLoading = isLoading
            return { isLoading }
          })
        },
      }),
      {
        name: "store",
        storage: createJSONStorage(() => sessionStorage),
        skipHydration: true,
      }
    )
  )
)
