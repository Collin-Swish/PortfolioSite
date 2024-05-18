import React, { ChangeEvent } from "react"
import { useState } from 'react'
import { LoginFields } from "../../classes/LoginFields";

export function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const changePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    const changeUsername = (e: React.FormEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
    }
    const Submit = async () => {
        let fields: LoginFields = new LoginFields(username, password)
        let data = JSON.stringify(fields)
        let options: Object = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        }
        let response = await fetch("/auth/login", options)
        let text = await response.text()
        console.log(text)
    }
    return (
        <main className="md:w-3/4 sm:w-screen m-auto mx-auto h-screen">
            <div className="md:mx-auto w-3/4 sm:mx-auto sm:py-8 md:my-12 text-center">
                <input type="text" placeholder="Username" onChange={changeUsername} className=" text-black my-5"/>
                <br />
                <input type="password" placeholder="Password" onChange={changePassword} className=" text-black my-5"/>
                <br />
                <button onClick={Submit} className=" p-3" style={{border: "solid 1px white", borderRadius: 20, backgroundColor: "grey"}}>Submit</button>
            </div>
        </main>
    )
}