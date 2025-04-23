"use client"

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Formulario() {
    const [nombreApellido, setNombreApellido] = useState("");
    const [asistira, setAsistira] = useState(true);
    const [restricciones, setRestricciones] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from('respuestas').insert([
            {
                nombre_apellido: nombreApellido,
                asistira,
                restricciones: restricciones || null,
            },
        ])
        setLoading(false)

        if (error) {
            alert("Error al guardar: " + error.message)
        } else {
            router.push("/enviado")
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-pink-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h1 className="text-2xl font-bold text-pink-600 text-center">Confirmá tu asistencia</h1>
                <h2 className="text-gray-700">Nombre y apellido</h2>
                <input type="text"
                    required
                    placeholder="Nombre y Apellido"
                    value={nombreApellido}
                    onChange={(e) => setNombreApellido(e.target.value)}
                    className="w-full border border-gray-300 text-black rounded-lg p-3 focus:outline-none focus:ring-pink-400" />
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-black font-medium">¿Vas a asistir</label>
                    <div className=" flex gap-4">
                        <label className="flex items-center gap-2 text-black">
                            <input
                                type="radio"
                                name="asistira"
                                checked={asistira === true}
                                onChange={() => setAsistira(true)}
                            />
                            Sí
                        </label>
                        <label className="flex items-center gap-2 text-black">
                            <input
                                type="radio"
                                name="asistira"
                                checked={asistira === false}
                                onChange={() => setAsistira(false)}
                            />
                            No
                        </label>
                    </div>
                </div>
                <h2 className="text-black">¿Tenés alguna restricción alimentaria?</h2>
                <textarea
                    placeholder="¿Tenés alguna restricción alimentaria?"
                    value={restricciones}
                    onChange={(e) => setRestricciones(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition"
                >
                    {loading ? 'Enviando...' : 'Confirmar'}
                </button>
            </form>

        </main>
    )
}