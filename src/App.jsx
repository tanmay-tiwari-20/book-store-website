import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </main>
  )
}

export default App