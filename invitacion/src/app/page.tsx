'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { useState, useEffect } from 'react'

const Completionist = () => <span>¡El evento comenzó! 🎉</span>

export default function Home() {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const countdownRenderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed) {
            return <Completionist />
        } else {
            return (
                <div className="text-[#cd9c90] text-lg mb-8">
                    <h2 className='text-center'>Sólo faltan</h2>
                    <span>{days} días </span>
                    <span>{hours} horas </span>
                    <span>{minutes} minutos </span>
                    <span>{seconds} segundos</span>
                </div>
            )
        }
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 pt-[140px] bg-cover bg-center relative" style={{ backgroundImage: "url('/prototipo.png')" }}>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-black mb-4 z-10"
            >
                ¡Estás invitado!
            </motion.h1>

            {/* <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white text-lg mb-8 max-w-md z-10"
            >
            </motion.p> */}


            {isClient && (
                <div className="z-20">
                    <Countdown
                        date={new Date('2025-08-22T23:59:59')}
                        renderer={countdownRenderer}
                        
                    />
                </div>
            )}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/formulario')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
            >
                Confirmar asistencia
            </motion.button>
        </main>
    )
}
