import { useQuery } from "@tanstack/react-query"
import { jsonPlaceholderApi } from "@shared/api/jsonplaceholder"
import type { Post, User } from "../model/types"

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => jsonPlaceholderApi.get("/posts") as Promise<Post[]>,
  })
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => jsonPlaceholderApi.get("/users") as Promise<User[]>,
  })
}
