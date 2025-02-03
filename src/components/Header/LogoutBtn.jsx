import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn () {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then( () => {
            dispatch(logout())
        })
    }
    return (
        <button
        className="relative inline-block px-4 py-2 font-medium group"
        onClick={logoutHandler}
        >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#090d1e]"></span>
            <span class="relative text-black group-hover:text-white">   
                Logout
            </span> 
        </button>
    )
}

export default LogoutBtn