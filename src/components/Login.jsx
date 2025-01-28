import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from "../store/authSlice"
import {Button, Input, Logo} from "./index"
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import {useForm} from "react-hook-form"

function Login () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    
    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
        className="flex items-center justify-center font-mono w-full">
            <div
            className={`mx-auto w-full max-w-lg text-QuinaryColor rounded-xl p-10 border border-black/10`}>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input 
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />
                        < Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true
                            })}
                            autoComplete
                        />
                        <Button
                            type="submit"
                            className="w-full">
                            Login
                        </Button>
                        <p className="mt-2 text-center text-base text-white/80">
                            Don&apos;t have any account?&nbsp;
                            <Link 
                                to="/signup"
                                className="font-medium text-primary transition-all duaration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login