"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DressCode() {
    const router = useRouter();

    return (
        <section className="h-screen flex flex-col items-center text-white px-6 py-12 bg-black bg-[url('/fondo.jpg')]">
            <Image
                src="/perchas.png"
                width={200}
                height={70}
                alt="Perchas"
                className="mt-20 ml-6"
            />
            <h2 className="text-3xl mb-4 mt-22 tracking-wider " style={{ fontFamily: "var(--font-playfair)" }}>dress code</h2>
            <p className="text-[48px] font-semibold italic text-gray-200" style={{ fontFamily: "var(--font-meow)" }}>Elegante</p>
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
