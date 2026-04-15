import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'
type Props = {}

export default function HomeLayout({}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
     
     <NavBar/>  

      <main className="w-full ">
        
        <Outlet />
      </main>

      {/* Optional: Add a shared Footer */}
     <Footer/>
    </div>
  )
}