import React from 'react'
import { Container, Logo, LogoutBtn } from "../index"
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header () {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return ( 
        <header className='relative font-mono font-bold'>
                <Container>
                    <span className="absolute top-0 left-0 w-[53%] h-full -z-10 bg-[linear-gradient(152deg,#fff_25%,#ffffff00_55%)] rounded-md"></span>            
                    <nav className="flex items-center">
                        <div>
                            <Link to="/">
                                <Logo width='70px'/>
                            </Link>
                        </div>
                        <ul className="flex gap-10 ml-auto mr-12">
                            {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    onClick={() => navigate(item.slug)}
                                    className="relative inline-block px-4 py-2 font-medium group"
                                    >
                                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                        <span class="relative text-black group-hover:text-white">
                                            {item.name}
                                        </span>
                                    </button>
                                    
                                </li>
                            ) : null)}
                            {authStatus && (
                                <li>
                                    <LogoutBtn/>
                                </li>
                            )}
                        </ul>
                    </nav>
                </Container>
            
        </header>
    )
}

export default Header