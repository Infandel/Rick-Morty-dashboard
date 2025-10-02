import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "@widgets/layout"
import { PostsPage } from "@pages/posts"
import { CharactersPage } from "@pages/characters"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/posts" replace />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="characters" element={<CharactersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
