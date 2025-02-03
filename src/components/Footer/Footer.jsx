import { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <section className="relative py-10 font-mono">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex justify-between flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full items-end">
                            <div>
                                <p className="text-sm text-white">
                                    &copy; Copyright 2025. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        onClick={toggleMenu}
                                        className="relative px-6 py-3 font-bold text-white rounded-lg group"
                                    >
                                        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                                        <span class="relative">Credits</span>
                                           
                                    </button>
                                </div>
                                {isOpen && (
                                    <div className="absolute bottom-full left-0 mb-2 w-48 z-10">
                                        <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                            <li>
                                                <Link
                                                    className="block px-4 py-2 text-white"
                                                    to={`/credit/${"chai-aur-code"}`}
                                                >
                                                    Chai aur Code
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="block px-4 py-2 text-white"
                                                    to={`/credit/${"javascript-mastery"}`}
                                                >
                                                    Javascript Mastery
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="block px-4 py-2 text-white"
                                                    to={`/credit/${"freepik"}`}
                                                >
                                                    Freepik
                                                </Link>                               
                                            </li>
                                        </ul>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer