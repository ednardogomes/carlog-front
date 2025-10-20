'use client'
import { Search } from 'lucide-react';
import { useState } from "react"

export default function VehicleHeader() {
    const [query, setQuery] = useState('')
    return (
        <div className="flex flex-col items-center mb-3">
            <div className="flex flex-col items-center mb-6">
                <h1 className="text-2xl font-semibold">Manutenação de Veículos</h1>
                <p className="text-sm text-slate-500">Registre e acompanhe serviços por veículos</p>
            </div>
            <div className='flex gap-2'>
                <div className='relative flex items-center bg-white p-2 rounded-md shadow-sm'>
                    <Search className='absolute right-3 h-5 w-5 text-gray-400' />
                    <input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Procurar veículo..."
                        className="outline-none w-48 pl-3 pr-10 py-2 rounded-md"
                    />
                </div>
                <button className='bg-emerald-600 text-white px-4 py-2 rounded-md shadow-sm text-sm cursor-pointer'>Novo Veículo</button>
            </div>
        </div>
    )
}