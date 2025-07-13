"use client"
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Ubicacion() {
    const router = useRouter();

    return (
        <section className="h-screen flex flex-col items-center px-4 text-center bg-[url('/fondo.jpg')]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2
                    className="text-[48px] md:text-5xl  mb-10 mt-30 text-white"
                    style={{ fontFamily: "var(--font-meow)" }}
                >
                    ¿Dónde nos encontramos?
                </h2>
                <p className="text-5xl font-medium pb-5 text-white" style={{ fontFamily: "var(--font-playfair)" }}>La Rural</p>
                <p className="text-[30px] leading-2 pt-5 text-white" style={{ fontFamily: "var(--font-playfair)" }}>Olavarría</p>

                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    href="https://www.google.com/maps/place/La+Rural+Salon+de+Eventos/@-36.9027418,-60.3580099,17z/data=!4m6!3m5!1s0x9594450047862435:0xf0b1ef7755a1f8f1!8m2!3d-36.9020951!4d-60.3574593!16s%2Fg%2F11x0x03tp2?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 hover:transition mt-20"
                >
                    <div className="flex flex-col items-center">
                        <MapPin className="w-10 h-10 text-white" />
                        <p className="text-white" style={{ fontFamily: "var(--font-playfair)" }}>Ver ubicación</p>
                    </div>
                </motion.a>
            </motion.div>
            <div className="absolute bottom-10 w-full flex justify-center gap-10 px-6">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => router.push("/contador")}
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
