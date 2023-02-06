import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <div>
            <Link href='/'>
            <h1> Reliance</h1>
            </Link>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>

                <li>
                    <Link href='/'>Products</Link>
                </li>
                <li>
                    <Link href='/'>Technical Info</Link>
                </li>
                <li>
                    <Link href='/'>FAQ</Link>
                </li>
                <li>
                    <Link href='/'>About Us</Link>
                </li>
                <li>
                    <Link href='/'>Contact Us</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar