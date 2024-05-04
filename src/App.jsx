import { useState } from "react"
import { Header, Footer, Modal } from "./components"
import HomePage from "./pages/home"
import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header setModalOpen={setModalOpen} />
      <main className="main">
        <Routes>
          {
            routes.map(route => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))
          }
        </Routes>
        <HomePage />
      </main>
      <Footer />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default App
