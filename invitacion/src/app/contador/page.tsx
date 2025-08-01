"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { useState, useEffect } from "react";

const Completionist = () => <span>¡El evento comenzó! 🎉</span>;

export default function ContadorPage() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const countdownRenderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed,
    }: CountdownRenderProps) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div className="flex justify-center gap-8 text-white text-2xl mb-8 border-y-1 p-3">
                    <div className="flex flex-col items-center">
                        <span className=" text-4xl">{days}</span>
                        <span className="text-base">Días</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className=" text-4xl">{hours}</span>
                        <span className="text-base">Horas</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className=" text-4xl">{minutes}</span>
                        <span className="text-base">Minutos</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className=" text-4xl">{seconds}</span>
                        <span className="text-base">Segundos</span>
                    </div>
                </div>
            );

        }
    };

    return (
        <main className="h-screen flex flex-col items-center px-6 text-white text-center relative bg-black bg-[url('/cover4.jpg')]" >

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-md flex flex-col items-center"
            >
                <h2
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="italic text-3xl mb-10 mt-30 leading-[60px]"
                >
                    Celebremos juntos una noche inolvidable
                </h2>

                <div className="flex">
                    <div className="border-y-1 w-30 h-18 mt-[22px] mr-2" ><p className="mt-[14px] text-[27px]" style={{ fontFamily: "var(--font-playfair)" }}>Viernes</p></div>
                    <div className="flex flex-col text-[24px]">
                        <p style={{ fontFamily: "var(--font-playfair)" }}>AGO</p>
                        <p className="font-bold text-[30px] -mt-[2px]" style={{ fontFamily: "var(--font-playfair)" }}>22</p>
                        <p className="-mt-2" style={{ fontFamily: "var(--font-playfair)" }}>2025</p>
                    </div>
                    <div className="border-y-1 w-30 h-18 mt-[22px] ml-2" >
                        <p className="mt-[14px] text-[27px]" style={{ fontFamily: "var(--font-playfair)" }}>21:00hs</p>
                    </div>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                <div className="mt-10">
                    <h2 style={{ fontFamily: "var(--font-meow)" }} className="text-[68px] mr-6">Faltan</h2>
                    {isClient && (
                        <Countdown
                            date={new Date("2025-08-22T20:00:00")}
                            renderer={countdownRenderer}
                        />
                    )}
                </div>
            </motion.div>
            <div className="absolute bottom-20 w-full flex justify-center gap-10 px-6">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => router.push("/")}
                    className="text-white text-3xl"
                    aria-label="Sección anterior"
                >
                    &lt;
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={() => router.push("/ubicacion")}
                    className="text-white text-3xl"
                    aria-label="Siguiente sección"
                >
                    &gt;
                </motion.button>
            </div>
        </main>
    );
}
