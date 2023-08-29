import { create, StateCreator } from "zustand"

type User = {
  id: number
  name: string
  company: any
  email: string
  phone: string
}

interface UserSlice {
  users: User[]
  setUsers: (users: User[]) => void
}

interface LoadingSlice {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

const createUserSlice: StateCreator<UserSlice> = (set) => ({
  users: [],
  setUsers: (users: User[]) => set(() => ({ users })),
})

const createLoadingSlice: StateCreator<LoadingSlice> = (
  set
) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
})

export const useBoundStore = create<UserSlice & LoadingSlice>()((...a) => ({
  ...createUserSlice(...a),
  ...createLoadingSlice(...a),
}))
