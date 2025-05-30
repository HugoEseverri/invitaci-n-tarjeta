"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Enviado() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-green-100 p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
                <h1 className="text-2xl font-bold text-green-600 mb-4">¡Gracias por confirmar!</h1>
                <p className="text-gray-700">
                    Tu respuesta fue registrada correctamente. En breve recibirás un email de confirmación.
                </p>
            </div>
        </main>
    );
}
