"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Confirmacion() {
    const router = useRouter();

    return (

        <section className="h-screen flex flex-col items-center text-white px-6 py-12 bg-black bg-[url('/cover4.jpg')]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <h2 className="text-3xl mb-4 mt-18 tracking-wider w-[350px] text-center leading-[36px] " style={{ fontFamily: "var(--font-playfair)" }}>¿Venís a celebrar conmigo?</h2>
            </motion.div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/formulario')}
                className=" text-white border-2 text-[20px] font-semibold py-4 px-8 rounded-lg shadow-md cursor-pointer mt-12 mb-10 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ fontFamily: "var(--font-playfair)" }}
            >
                Confirmar asistencia
            </motion.button>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <Image
                    src="/cover.PNG"
                    width={300}
                    height={15}
                    alt=""
                    className="mt-10"

                />
                <h2 className="text-2xl mb-4 mt-10 tracking-wider w-[320px] text-center" style={{ fontFamily: "var(--font-playfair)" }}>Para ayudarte a guardar un lugar especial, confirmá antes del <strong>10 de Agosto</strong></h2>

            </motion.div>
            <div className="absolute bottom-10 w-full flex justify-center gap-10 px-6">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => router.push("/dresscode")}
                    className="text-white text-3xl"
                    aria-label="Sección anterior"
                >
                    &lt;
                </motion.button>
            </div>
        </section>
    );
}
