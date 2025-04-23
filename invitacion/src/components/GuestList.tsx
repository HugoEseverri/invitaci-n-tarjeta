'use client'

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

type Guest = {
    id: number;
    nombre_apellido: string;
    email: string;
    asistencia: boolean;
    restricciones?: string;
}

export default function GuestList() {
    const supabase = createClientComponentClient();
    const [guests, setGuests] = useState<Guest[]>([]);

    useEffect(() => {
        const fetchGuests = async () => {
            console.log('Fetching guests...');  // Verificar si la función de fetch se está ejecutando
            const { data, error } = await supabase.from('respuestas').select('*').order('nombre_apellido', { ascending: true });

            if (error) {
                console.log('Error al obtener los datos:', error);  // Verificar si hay algún error en la consulta
            } else {
                console.log('Datos obtenidos:', data);  // Verificar si los datos se están recuperando correctamente
                setGuests(data);  // Asignar los datos a la lista de invitados
            }
        };
        fetchGuests();
    }, []);

    console.log('Lista de invitados:', guests);  // Verificar si los datos se guardaron correctamente en el estado

    return (
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 text-left">Nombre y Apellido</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Asistencia</th>
                        <th className="px-4 py-2 text-left">Restricciones</th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map((guest) => (
                        <tr key={guest.id} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-2">{guest.nombre_apellido}</td>
                            <td className="px-4 py-2">{guest.email}</td>
                            <td className="px-4 py-2">{guest.asistencia ? 'Sí' : 'No'}</td>
                            <td className="px-4 py-2">{guest.restricciones || '—'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
