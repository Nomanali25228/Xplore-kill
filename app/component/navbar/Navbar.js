'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [style , setStyle] = useState(null)
    const showMenu = () =>{
        // setStyle(`mt-[200px]`)
        // console.log('test');
    }
    const hideMenu = () =>{

        setStyle('')
    }
    return (
        <div>
            <nav>
                <Link href="/" class="logo">Xplore                    <i class="fab fa-staylinked"></i>kill
                </Link>
                <div className={`nav-links ${style}`} id="navLinks" >

                    <i class="fa fa-times" onClick={hideMenu}></i>
                    <ul>
                        <li> <Link href="/">Home</Link></li>
                        <li><Link href="/Course">Course</Link></li>
                        <li><Link href="/Blog">Blog</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Contect">Contact</Link></li>
                    </ul>
                </div>
                {/* <i class="fa fa-bars" onClick={showMenu}></i> */}

            </nav>
        </div>
    )
}
