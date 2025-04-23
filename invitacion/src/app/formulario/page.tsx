"use client"

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Formulario() {
    const [nombreApellido, setNombreApellido] = useState("");
    const [asistira, setAsistira] = useState<boolean | null>(null);
    const [restricciones, setRestricciones] = useState<'sí' | 'no'>('no');
    const [restriccionesText, setRestriccionesText] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Validación para asegurarse de que se haya elegido una opción
        if (asistira === null) {
            alert("Por favor, seleccioná si vas a asistir.");
            setLoading(false);
            return;
        }

        console.log("📝 Enviando a Supabase:", {
            nombre_apellido: nombreApellido,
            asistira,
            restricciones,
            email,
        });

        // Si el usuario seleccionó "No" en restricciones, no enviamos el campo
        const restriccionesFinal = restricciones === 'sí' ? restriccionesText : null;

        // Enviar datos a Supabase
        const { data, error } = await supabase.from('respuestas').insert([{
            nombre_apellido: nombreApellido,
            asistira: asistira === true, // <-- fuerza booleano puro
            restricciones: restriccionesFinal, // Solo enviamos texto si es "Sí", sino null
            email,
        }]).select("*");

        console.log("📦 Guardado en Supabase:", data);

        setLoading(false);

        if (error) {
            alert("Error al guardar: " + error.message);
        } else {
            try {
                const res = await fetch('/api/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ to: email, nombre: nombreApellido }),
                });

                const data = await res.json();
                console.log("📧 Respuesta del backend /api/send:", data);
                if (data.success) {
                    router.push("/enviado");
                } else {
                    alert('Error al enviar el correo de confirmación');
                }
            } catch (err) {
                console.error('Error al enviar el correo', err);
                alert('Error al enviar el correo de confirmación');
            }
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-pink-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h1 className="text-2xl font-bold text-pink-600 text-center">Confirmá tu asistencia</h1>

                <h2 className="text-gray-700">Nombre y apellido</h2>
                <input
                    type="text"
                    required
                    placeholder="Nombre y Apellido"
                    value={nombreApellido}
                    onChange={(e) => setNombreApellido(e.target.value)}
                    className="w-full border border-gray-300 text-black rounded-lg p-3 focus:outline-none focus:ring-pink-400"
                />

                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-black font-medium">¿Vas a asistir?</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-black">
                            <input
                                type="radio"
                                name="asistira"
                                checked={asistira === true}
                                onChange={() => setAsistira(true)}
                            />
                            Sí
                        </label>
                        <label className="flex items-center gap-2 text-black">
                            <input
                                type="radio"
                                name="asistira"
                                checked={asistira === false}
                                onChange={() => setAsistira(false)}
                            />
                            No
                        </label>
                    </div>
                </div>

                <h2 className="text-black">¿Tenés alguna restricción alimentaria?</h2>

                {/* Selección de sí/no */}
                <div className="flex items-center mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="restriccion"
                            value="sí"
                            checked={restricciones === 'sí'}
                            onChange={() => setRestricciones('sí')}
                            className="mr-2"
                        />
                        Sí
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="restriccion"
                            value="no"
                            checked={restricciones === 'no'}
                            onChange={() => setRestricciones('no')}
                            className="mr-2"
                        />
                        No
                    </label>
                </div>

                {/* Si la opción es "Sí", mostramos el textarea */}
                {restricciones === 'sí' && (
                    <textarea
                        placeholder="Escribí tus restricciones alimentarias..."
                        value={restriccionesText}
                        onChange={(e) => setRestriccionesText(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
                    />
                )}

                <h2 className="text-black">Email</h2>
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition"
                >
                    {loading ? 'Enviando...' : 'Confirmar'}
                </button>
            </form>
        </main>
    );
}
