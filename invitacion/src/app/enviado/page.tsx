"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Enviado() {
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const nombre = params.get("nombre");
        const asistira = params.get("asistira") === "true";

        const whatsappTimer = setTimeout(() => {
            if (asistira && nombre) {
                const numero = "5492284629919";
                const mensaje = `Hola, confirmo mi asistencia a la fiesta. Soy ${nombre} 🎉`;
                window.location.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            }
        }, 10000);


        const redirectTimer = setTimeout(() => {
            router.push("/");
        }, 10000);

        return () => {
            clearTimeout(whatsappTimer);
            clearTimeout(redirectTimer);
        };
    }, [router]);

    return (
        <section className="h-screen flex flex-col items-center text-white px-6 py-12 bg-[url('/cover4.jpg')]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center mt-20"
            >
                <h2
                    className="text-5xl mb-4 mt-10 tracking-wider w-[350px] text-center leading-[48px] text-white"
                    style={{ fontFamily: "var(--font-meow)" }}
                >
                    ¡Gracias por elegir ser parte de una noche tan especial!
                </h2>
                <h2
                    className="text-2xl mb-4 mt-10 tracking-wider w-[350px] text-center leading-[30px] text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    ¡Ahora vas a ser redirigida/o a Whatsapp,nos ayudarías confirmando también con un mensaje😄!
                </h2>
                <Image
                    src="/retroflower3.PNG"
                    width={270}
                    height={70}
                    alt="Perchas"
                    className="mt-5"
                />
            </motion.div>
        </section>
    );
}

export const dynamic = "force-dynamic";
