import { useState } from "react"
import { Header, Footer, Modal } from "./components"
import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"
import { Toaster } from "react-hot-toast"

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
      </main>
      <Footer />
      <Toaster position="top-center" />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default App
