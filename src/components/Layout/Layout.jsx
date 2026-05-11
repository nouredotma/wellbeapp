import { Footer } from "./Footer"
import Header from "./Header"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Layout = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === "/home" || location.pathname === "/"

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-[tomato] bg-gray-50 min-h-screen flex flex-col">
      <Header isHomePage={isHomePage} />
      <main className={`flex-grow ${!isHomePage ? "mt-16" : ""} transition-all duration-300`}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

