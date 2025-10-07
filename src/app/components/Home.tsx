import Link from "next/link";

export default function Home() {
    return (
        <div>
            <p className="text-[100px] text-cyan-200 mb-50"> Bem vindo.!</p>
            <Link href="/login" className="bg-blue-400 text-white p-3 rounded-2xl cursor-pointer">Ir para página de login</Link>
        </div>
    )
}