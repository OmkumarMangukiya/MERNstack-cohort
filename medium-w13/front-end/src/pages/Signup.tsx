/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
// import InputBox from "../Components/InputBox";
import { useState } from "react";
import axios from "axios"; // Import axios library

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <div className=" h-screen p-1 bg-slate-300 ">
            <div className=" flex flex-col m-auto justify-center rounded-lg bg-white w-fit text-center p-2 h-max ">
            <input type="text" placeholder="email" onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                setEmail(e.currentTarget.value);
            }} 
            
            className="border-2 border-gray-900 rounded-lg "/>
            <input type="text" placeholder="password" onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                setPassword(e.currentTarget.value);
            }}/>
            <input type="text" placeholder="name" onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                setName(e.currentTarget.value);
            }}/>
            <button onClick={async () => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    email: email,
                    password: password,
                    name: name
            
                });
                localStorage.setItem("token", response.data.token);

            }}>Sign Up</button>
        </div>
        </div>
    )
}
export default Signup;