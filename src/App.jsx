import { useState } from "react"
import { Header, Footer, Modal, MenuModal } from "./components"
import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"
import { Toaster } from "react-hot-toast"

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <main className="main">
        <Routes>
          {
            routes.map(route => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))
          }
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <MenuModal setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </>
  )
}

export default App
