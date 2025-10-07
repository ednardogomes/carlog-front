"use client"
import Button from "@/app/components/Button";
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (email.length === 0 || password.length === 0) {
            return window.alert("Preencha todos os campos")
        }
        console.log(email, password)
    }



    return (
        <div>
            <section className="text-white flex justify-center items-center h-screen px-10">
                <div className="w-[450px] h-[450px] bg-gray-300 flex flex-col items-center justify-center gap-2 rounded-2xl">
                    <div className="pb-[4.5rem] text-6xl font-bold">Login</div>
                    <div>
                        <p>Digite seu E-mail</p>
                        <input
                            className="bg-gray-500 rounded-md p-2 mt-2"
                            type="text"
                            placeholder="teste@teste.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div >
                        <p>Digite sua Senha</p>
                        <input
                            className="bg-gray-500 rounded-md p-2 mt-2"
                            placeholder="123456789"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button text="Entrar" onClick={handleLogin} />
                    <div>
                        <p>NÃO TEM CONTA? CLIQUE AQUI</p>
                    </div>
                </div>
            </section>
        </div>
    )
}