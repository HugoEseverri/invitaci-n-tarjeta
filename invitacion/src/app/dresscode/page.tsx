"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DressCode() {
    const router = useRouter();

    return (

        <section className="h-screen flex flex-col items-center text-white px-6 py-12 bg-black bg-[url('/cover4.jpg')]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <Image
                    src="/perchas.png"
                    width={250}
                    height={90}
                    alt="Perchas"
                    className="mt-10 ml-6 w-[250px] h-[90px] "
                    placeholder="blur"
                    blurDataURL="/perchas.png"
                    priority
                />
                <h2 className="text-4xl mb-4 mt-12 tracking-wider text-white" style={{ fontFamily: "var(--font-playfair)" }}>dress code</h2>
                <p className="text-[58px] font-semibold italic text-gray-200 mt-12 mr-6" style={{ fontFamily: "var(--font-meow)" }}>Gala</p>

                <Image
                    src="/cover.PNG"
                    width={300}
                    height={15}
                    alt="Flores"
                    className="mt-10"

                />
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
                    onClick={() => router.push("/confirmacion")}
                    className="text-white text-3xl"
                    aria-label="Siguiente sección"
                >
                    &gt;
                </motion.button>
            </div>
        </section>
    );
}
