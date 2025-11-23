import React from "react"
import Sidebar from "./Sidebar .jsx"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4 overflow-auto">
        <Outlet /> {/* Renders the current page */}
      </main>
    </div>
  )
}

export default Layout
