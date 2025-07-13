"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
    const router = useRouter();

    return (
        <main className="h-screen flex flex-col items-center justify-center text-white text-center relative bg-[url('/fondo.jpg')]">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                style={{ fontFamily: "var(--font-meow)" }}
                className="text-[100px] -mt-20 mr-7 "
            >
                Elena
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-[30px] font-medium mr-2"
            >
                Mis XV
            </motion.h2>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                onClick={() => router.push("/contador")}
                className="absolute bottom-20 text-white text-3xl"
                aria-label="Siguiente sección"
            >
                &gt;
            </motion.button>
        </main>
    );
}

// 'use client'

// import { motion } from 'framer-motion'
// import Countdown, { CountdownRenderProps } from 'react-countdown'
// import { useEffect, useState } from 'react'

// const Completionist = () => <span>¡El evento comenzó! 🎉</span>

// export default function Home() {
//     const [isClient, setIsClient] = useState(false)

//     useEffect(() => {
//         setIsClient(true)
//     }, [])

//     const countdownRenderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
//         if (completed) {
//             return <Completionist />
//         } else {
//             return (
//                 <div className="text-[#cd9c90] text-lg mb-8 text-center">
//                     <h2>Sólo faltan</h2>
//                     <span>{days} días </span>
//                     <span>{hours} horas </span>
//                     <span>{minutes} minutos </span>
//                     <span>{seconds} segundos</span>
//                 </div>
//             )
//         }
//     }

//     const scrollToSection = (id: string) => {
//         const el = document.getElementById(id)
//         el?.scrollIntoView({ behavior: 'smooth' })
//     }

//     return (
//         <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
//             {/* Sección 1: Portada */}
//             <section
//                 id="section1"
//                 className="snap-start h-screen flex flex-col items-center justify-center px-6 py-12 relative bg-cover bg-center"
//                 style={{ backgroundImage: "url('/fondo.jpg')" }}
//             >
//                 <div className="absolute inset-0 bg-black opacity-10 z-0" />
//                 <motion.h1
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 2.0 }}
//                     style={{ fontFamily: 'var(--font-meow)' }}
//                     className="text-[100px] text-white z-10"
//                 >
//                     Elena
//                 </motion.h1>
//                 <h2 style={{ fontFamily: 'var(--font-playfair)' }} className="text-[30px] font-medium text-white z-10">
//                     Mis XV
//                 </h2>
//                 <button
//                     onClick={() => scrollToSection('section2')}
//                     className="text-white text-4xl mt-20 animate-bounce z-10"
//                 >
//                     &gt;
//                 </button>
//             </section>

//             {/* Sección 2: Frase + Fecha + Contador */}
//             <section id="section2" className="snap-start h-screen flex flex-col items-center justify-center text-white relative bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
//                 <div className="absolute inset-0 bg-black opacity-10 z-0" />
//                 <h3 style={{ fontFamily: 'var(--font-playfair)' }} className="text-2xl mb-4 z-10">
//                     "Una noche para recordar"
//                 </h3>
//                 <p className="text-lg mb-2 z-10">22 de Agosto, 2025 - 20:00 hs</p>

//                 {isClient && (
//                     <Countdown
//                         date={new Date('2025-08-22T20:00:00')}
//                         renderer={countdownRenderer}
//                     />
//                 )}

//                 <button
//                     onClick={() => scrollToSection('section1')}
//                     className="absolute top-4 left-4 text-white text-2xl z-10"
//                 >
//                     ←
//                 </button>
//                 <button
//                     onClick={() => scrollToSection('section3')}
//                     className="text-white text-4xl mt-20 animate-bounce z-10"
//                 >
//                     &gt;
//                 </button>
//             </section>

//             {/* Sección 3 */}
//             <section id="section3" className="snap-start h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
//                 <div className="absolute inset-0 bg-black opacity-10 z-0" />
//                 <button
//                     onClick={() => scrollToSection('section2')}
//                     className="absolute top-4 left-4 text-white text-2xl z-10"
//                 >
//                     ←
//                 </button>
//                 <h2 className="text-white text-2xl z-10">Sección 3</h2>
//                 <button
//                     onClick={() => scrollToSection('section4')}
//                     className="absolute bottom-10 text-white text-4xl animate-bounce z-10"
//                 >
//                     &gt;
//                 </button>
//             </section>

//             {/* Sección 4 */}
//             <section id="section4" className="snap-start h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
//                 <div className="absolute inset-0 bg-black opacity-10 z-0" />
//                 <button
//                     onClick={() => scrollToSection('section3')}
//                     className="absolute top-4 left-4 text-white text-2xl z-10"
//                 >
//                     ←
//                 </button>
//                 <h2 className="text-white text-2xl z-10">Sección 4</h2>
//                 <button
//                     onClick={() => scrollToSection('section5')}
//                     className="absolute bottom-10 text-white text-4xl animate-bounce z-10"
//                 >
//                     &gt;
//                 </button>
//             </section>

//             {/* Sección 5 */}
//             <section id="section5" className="snap-start h-screen flex flex-col items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
//                 <div className="absolute inset-0 bg-black opacity-10 z-0" />
//                 <button
//                     onClick={() => scrollToSection('section4')}
//                     className="absolute top-4 left-4 text-white text-2xl z-10"
//                 >
//                     ←
//                 </button>
//                 <h2 className="text-white text-2xl mb-4 z-10">¡Confirmá tu asistencia!</h2>
//                 <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => window.location.href = '/formulario'}
//                     className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition z-10"
//                 >
//                     Confirmar asistencia
//                 </motion.button>
//             </section>
//         </main>
//     )
// }



// // 'use client'

// // import { motion } from 'framer-motion'
// // import { useRouter } from 'next/navigation'
// // import Countdown, { CountdownRenderProps } from 'react-countdown'
// // import { useState, useEffect } from 'react'

// // const Completionist = () => <span>¡El evento comenzó! 🎉</span>

// // export default function Home() {
// //     const router = useRouter()
// //     const [isClient, setIsClient] = useState(false)

// //     useEffect(() => {
// //         setIsClient(true)
// //     }, [])

// //     const countdownRenderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
// //         if (completed) {
// //             return <Completionist />
// //         } else {
// //             return (
// //                 <div className="text-[#cd9c90] text-lg mb-8">
// //                     <h2 className='text-center'>Sólo faltan</h2>
// //                     <span>{days} días </span>
// //                     <span>{hours} horas </span>
// //                     <span>{minutes} minutos </span>
// //                     <span>{seconds} segundos</span>
// //                 </div>
// //             )
// //         }
// //     }

// //     return (
// //         <main className="min-h-screen flex flex-col items-center  px-6 py-12  bg-cover bg-center relative" style={{ backgroundImage: "url('/fondo.jpg')" }}>
// //             <div className="absolute inset-0 bg-black opacity-10"></div>
// //             <motion.h1
// //                 initial={{ opacity: 0, y: -20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 2.0 }}
// //                 style={{ fontFamily: 'var(--font-meow)' }}
// //                 className="text-[100px]  mb-4 z-50 mt-[100px]"
// //             >
// //                 Elena
// //             </motion.h1>
// //             <h2 style={{ fontFamily: 'var(--font-playfair)' }} className="text-[30px] font-medium">
// //                 Mis XV
// //             </h2>

// //             {isClient && (
// //                 <div className="z-20">
// //                     <Countdown
// //                         date={new Date('2025-08-22T23:59:59')}
// //                         renderer={countdownRenderer}

// //                     />
// //                 </div>
// //             )}
// //             <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={() => router.push('/formulario')}
// //                 className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition z-10"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.6, duration: 0.4 }}
// //             >
// //                 Confirmar asistencia
// //             </motion.button>
// //         </main>
// //     )
// // }
