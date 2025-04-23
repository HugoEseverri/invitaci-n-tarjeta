"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { motion } from "framer-motion";
import { Session } from '@supabase/supabase-js'
import GuestList from "@/components/GuestList";

export default function AdminPage() {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    }, [])

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError('Credenciales incorrectas')
        } else {
            setSession(data.session)
        }
    }

    if (!session) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400 text-gray-700">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Acceso Administrador</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-lg mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-3 border rounded-lg mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
                    <button
                        onClick={handleLogin}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition"
                    >
                        Iniciar sesión
                    </button>
                </motion.div>

            </main>
        )
    }
    return (
        <main className="min-h-screen p-8 bg-gray-600 text-black">
            <h1 className="text-3xl font-bold mb-6">Panel de administración 🎉</h1>
            <GuestList />
        </main>
    )

}