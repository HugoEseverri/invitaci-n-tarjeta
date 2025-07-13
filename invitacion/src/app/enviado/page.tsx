"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Enviado() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (

        <section className="h-screen flex flex-col items-center text-white px-6 py-12 bg-black bg-[url('/fondo.jpg')]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center mt-20"
            >
                <h2 className="text-5xl mb-4 mt-30 tracking-wider w-[350px] text-center leading-[48px] " style={{ fontFamily: "var(--font-meow)" }}>¡Gracias por elegir ser parte de una noche tan especial!</h2>
                <Image
                    src="/retroflower3.png"
                    width={300}
                    height={90}
                    alt="Perchas"
                    className="mt-10"
                />

            </motion.div>
        </section>
    );
}
