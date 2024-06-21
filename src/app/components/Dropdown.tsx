"use client"
import Link from 'next/link'
import React from 'react'
import { logout } from '../api/auth'
import { useRouter } from 'next/navigation'

const Dropdown = () => {
    const router = useRouter()
    const handelLogout = async () => {
        
        await logout().then(()=>{
            alert("log out successfully")
            router.push("/auth/login")
        })
    }
    return (

        <div>

            <button className="px-4 py-2 bg-black text-white border border-gray-600 hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded-md">
                <Link href={"/auth/login"}>Login</Link>
            </button>

            <button className="px-4 py-2 bg-blue-500 text-white border border-gray-600 hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded-md">
                <Link href={"/auth/register"}>Register</Link>

            </button>
            <button onClick={handelLogout}>Logout</button>

        </div>

    )
}

export default Dropdown