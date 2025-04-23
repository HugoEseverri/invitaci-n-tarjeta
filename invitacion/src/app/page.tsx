// app/page.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-pink-100 to-white text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">¡Estás invitado!</h1>
            <p className="text-gray-700 text-lg mb-8 max-w-md">
                Te esperamos para celebrar juntos un día muy especial. Confirmá tu asistencia con el siguiente botón.
            </p>

            <button
                onClick={() => router.push('/formulario')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
            >
                Confirmar asistencia
            </button>

            {/* <button className="mt-4 text-sm underline text-pink-500">Ver ubicación</button> */}
        </main>
    )
}
