import { CharacterCharts } from "@features/character-charts"

export function CharactersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-balance">Rick and Morty Analytics</h1>
        <p className="text-muted-foreground mt-2 text-pretty">
          Visual insights and statistics from the Rick and Morty universe
        </p>
      </div>
      <CharacterCharts />
    </div>
  )
}
