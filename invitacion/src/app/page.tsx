'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-pink-100 to-white text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-pink-600 mb-4"
            >
                ¡Estás invitado!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-700 text-lg mb-8 max-w-md"
            >
                Te esperamos para celebrar juntos un día muy especial. Confirmá tu asistencia con el siguiente botón.
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/formulario')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
            >
                Confirmar asistencia
            </motion.button>
        </main>
    )
}
