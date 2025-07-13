"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

export default function Formulario() {
    const [nombreApellido, setNombreApellido] = useState("");
    const [asistira, setAsistira] = useState<boolean | null>(null);
    const [restricciones, setRestricciones] = useState<'' | 'sí'>('');
    const [restriccionesText, setRestriccionesText] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [formEnviado, setFormEnviado] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (asistira === null) {
            alert("Por favor, seleccioná si vas a asistir.");
            setLoading(false);
            return;
        }

        const restriccionesFinal = restricciones === 'sí' ? restriccionesText : null;

        const { error } = await supabase.from('respuestas').insert([{
            nombre_apellido: nombreApellido,
            asistira: asistira === true,
            restricciones: restriccionesFinal,
            email,
        }]).select("*");

        setLoading(false);

        if (error) {
            alert("Error al guardar: " + error.message);
        } else {
            try {
                const templateId = asistira ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID! : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NO_ASISTENCIA_ID!;
                const _result = await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    templateId,
                    {
                        to_email: email,
                        from_name: "Confirmación de asistencia",
                        user_name: nombreApellido,
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                );
                toast.success("¡Correo enviado con éxito!");
                setFormEnviado(true);
                setTimeout(() => {
                    router.push("/enviado");
                }, 2000);
            } catch (err) {
                console.error("❌ Error al enviar el email:", err);
                toast.error("Error al enviar el correo de confirmación");
            }
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[url('/fondo.jpg')]">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 shadow-xl p-8 space-y-6 " style={{ fontFamily: "var(--font-playfair)" }}>
                <h1 className="text-2xl font-bold  text-center tracking-wider">Confirmá tu asistencia</h1>

                <h2 className="text-[20px] tracking-wider">Nombre y apellido</h2>
                <input
                    type="text"
                    required
                    placeholder="Escribí acá tu respuesta"
                    value={nombreApellido}
                    onChange={(e) => setNombreApellido(e.target.value)}
                    className="w-full border-b border-gray-300 text-[18px] tracking-wider p-3 focus:outline-none"
                />

                <div className="flex flex-col space-y-2">
                    <label className="text-[20px] font-medium tracking-wider">¿Vas a asistir?</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 mr-4 mt-2">
                            <input
                                type="checkbox"
                                name="asistira"
                                checked={asistira === true}
                                onChange={() => setAsistira(true)}
                                
                            />
                            Sí
                        </label>
                        <label className="flex items-center gap-2 mt-2">
                            <input
                                type="checkbox"
                                name="asistira"
                                checked={asistira === false}
                                onChange={() => setAsistira(false)}
                            />
                            No
                        </label>
                    </div>
                </div>

                <h2 className="text-[20px] tracking-wider">¿Tenés alguna restricción alimentaria?</h2>

                <div className="flex items-center mb-4">
                    <label>
                        <input
                            type="checkbox"
                            name="restriccion"
                            value="sí"
                            checked={restricciones === 'sí'}
                            onChange={() => setRestricciones('sí')}
                            className="mr-2 "
                        />
                        Sí
                    </label>
                </div>

                {restricciones === 'sí' && (
                    <textarea
                        placeholder="Escribí tus restricciones alimentarias..."
                        value={restriccionesText}
                        onChange={(e) => setRestriccionesText(e.target.value)}
                        className="w-full border border-gray-300  p-3 focus:outline-none focus:ring-2 tracking-wider"
                    />
                )}

                <p className="text-[18px] mt-2 tracking-wider">Si no tenés ninguna, no selecciones nada.</p>

                <h2 className="text-[20px]">Email</h2>
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 text-[18px] p-3 focus:outline-none tracking-wider"
                />

                <button
                    type="submit"
                    disabled={loading || formEnviado}
                    className="w-full bg-gray-700 hover:bg-gray-500 text-white font-bold py-3 rounded-lg transition tracking-wider text-[20px] cursor-pointer"
                >
                    {formEnviado ? "Gracias por tu tiempo" : "Confirmar"}
                </button>
            </form>
        </main>
    );
}
