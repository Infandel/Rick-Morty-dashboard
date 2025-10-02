import { useQuery } from "@tanstack/react-query"
import { rickAndMortyApi } from "@shared/api/rick-and-morty"
import type { CharactersResponse } from "../model/types"

export const useCharacters = (page = 1) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => rickAndMortyApi.get(`/character?page=${page}`) as Promise<CharactersResponse>,
  })
}

export const useAllCharacters = () => {
  return useQuery({
    queryKey: ["characters", "all"],
    queryFn: async () => {
      const firstPage = (await rickAndMortyApi.get("/character?page=1")) as CharactersResponse
      const totalPages = firstPage.info.pages

      const allPages = await Promise.all(
        Array.from({ length: totalPages }, (_, i) =>
          rickAndMortyApi.get(`/character?page=${i + 1}`).then((res) => (res as CharactersResponse).results),
        ),
      )

      return allPages.flat()
    },
    staleTime: 10 * 60 * 1000,
  })
}
