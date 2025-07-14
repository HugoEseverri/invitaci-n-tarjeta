"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NoAsiste() {
    const router = useRouter();
    
        useEffect(() => {
            const timer = setTimeout(() => {
                router.push("/");
            }, 5000);
    
            return () => clearTimeout(timer);
        }, [router]);


    return (
        <main className="h-screen flex items-center justify-center text-center bg-[url('/cover4.jpg')] text-white ">
            <h1 className="text-5xl -mt-80 leading-[58px]" style={{ fontFamily: "var(--font-meow)" }}>
                ¡Gracias por avisarnos! <br /> Te vamos a extrañar
            </h1>
        </main>
    );
}
