import React, { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
type Props = {}

export default function HomeLayout({}: Props) {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 2000);
}, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
     
     <NavBar/>  
      {loading && <Loader/>}
      <main className="w-full ">
        
        <Outlet />
      </main>

      {/* Optional: Add a shared Footer */}
     <Footer/>
    </div>
  )
}