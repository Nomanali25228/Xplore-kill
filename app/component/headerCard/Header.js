import React from 'react'
import Link from 'next/link'
import Navbar from '../navbar/Navbar'
export default function Header(props) {
  return (
    <div>
        <section class="Sub-header">
                <Navbar />
                <h1>{props.tital}</h1>
            </section>
    </div>
  )
}
