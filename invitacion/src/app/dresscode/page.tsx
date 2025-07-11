"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DressCode() {
    const router = useRouter();

    return (

        <section className="h-screen flex flex-col items-center text-white px-6 py-12 bg-black bg-[url('/fondo.jpg')]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <Image
                    src="/perchas.png"
                    width={200}
                    height={70}
                    alt="Perchas"
                    className="mt-10 ml-6"
                />
                <h2 className="text-3xl mb-4 mt-12 tracking-wider " style={{ fontFamily: "var(--font-playfair)" }}>dress code</h2>
                <p className="text-[48px] font-semibold italic text-gray-200" style={{ fontFamily: "var(--font-meow)" }}>Gala</p>

                <Image
                    src="/cover.png"
                    width={300}
                    height={15}
                    alt=""
                    className="mt-10"

                />
            </motion.div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/formulario')}
                className=" text-white border-2 font-semibold py-3 px-6 rounded-lg shadow-md transition z-10 cursor-pointer mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                Confirmar asistencia
            </motion.button>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
            <h2 className="text-2xl mb-4 mt-20 tracking-wider w-[320px] text-center" style={{ fontFamily: "var(--font-playfair)" }}>No olvides confirmar tu asistencia</h2>

            </motion.div>
            <div className="absolute bottom-10 w-full flex justify-center gap-10 px-6">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => router.push("/ubicacion")}
                    className="text-white text-3xl"
                    aria-label="Sección anterior"
                >
                    &lt;
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => router.push("/dresscode")}
                    className="text-white text-3xl"
                    aria-label="Siguiente sección"
                >
                    &gt;
                </motion.button>
            </div>
        </section>
    );
}
