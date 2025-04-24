'use client'

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FiTrash2 } from 'react-icons/fi'

type Guest = {
    id: number;
    nombre_apellido: string;
    email: string;
    asistira: boolean;
    restricciones?: string;
}

export default function GuestList() {
    const supabase = createClientComponentClient();
    const [guests, setGuests] = useState<Guest[]>([]);
    const [searchText, setSearchText] = useState('');
    const [filtro, setFiltro] = useState<'todos' | 'confirmados' | 'noConfirmados' | 'conRestricciones'>('todos');
    const [deletingId, setDeletingId] = useState<number | null>(null);

    useEffect(() => {
        const fetchGuests = async () => {
            const { data, error } = await supabase.from('respuestas').select('*').order('nombre_apellido', { ascending: true });

            if (error) {
                console.log('Error al obtener los datos:', error);
            } else {
                setGuests(data);
            }
        };
        fetchGuests();
    }, []);

    const filteredGuests = guests
        .filter((guest) => guest.nombre_apellido.toLowerCase().includes(searchText.toLowerCase()))
        .filter((guest) => {
            if (filtro === 'confirmados') return guest.asistira;
            if (filtro === 'noConfirmados') return !guest.asistira;
            if (filtro === 'conRestricciones') {
                return typeof guest.restricciones === 'string' &&
                    guest.restricciones.trim() !== '' &&
                    guest.restricciones.trim().toLowerCase() !== 'no';
            }

            return true;
        });

    const total = guests.length;
    const confirmados = guests.filter(g => g.asistira).length;
    const noConfirmados = guests.filter(g => !g.asistira).length;
    const conRestricciones = guests.filter(g =>
        typeof g.restricciones === 'string' &&
        g.restricciones.trim() !== '' &&
        g.restricciones.trim().toLowerCase() !== 'no'
    ).length;

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm('¿Estás seguro de que querés eliminar este contacto?');
        if (!confirmDelete) return;

        setDeletingId(id);

        setTimeout(async () => {
            const { error } = await supabase.from('respuestas').delete().eq('id', id);
            if (error) {
                console.error('Error al eliminar:', error);
                alert('Ocurrió un error al eliminar el contacto.');
            } else {
                setGuests((prev) => prev.filter((g) => g.id !== id));
            }
            setDeletingId(null);
        }, 300);
    };

    return (
        <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-800">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold">{total}</span>
                    <span>Total respuestas</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-green-600">{confirmados}</span>
                    <span>Confirmados</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-red-600">{noConfirmados}</span>
                    <span>No asistirán</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-yellow-600">{conRestricciones}</span>
                    <span>Con restricciones</span>
                </div>
            </div>

            <input
                type="text"
                placeholder="Buscar por nombre o apellido..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-black"
            />

            <div className="flex flex-wrap gap-2 mb-4">
                <button onClick={() => setFiltro('todos')} className={`px-3 py-1 rounded ${filtro === 'todos' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Todos</button>
                <button onClick={() => setFiltro('confirmados')} className={`px-3 py-1 rounded ${filtro === 'confirmados' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Confirmados</button>
                <button onClick={() => setFiltro('noConfirmados')} className={`px-3 py-1 rounded ${filtro === 'noConfirmados' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>No asistirán</button>
                <button onClick={() => setFiltro('conRestricciones')} className={`px-3 py-1 rounded ${filtro === 'conRestricciones' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Con restricciones</button>
            </div>

            <div className="hidden md:block overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left">Nombre y Apellido</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Asistencia</th>
                            <th className="px-4 py-2 text-left">Restricciones</th>
                            <th className="px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGuests.map((guest) => (
                            <tr
                                key={guest.id}
                                className={`border-t border-gray-200 hover:bg-gray-50 transition-colors ${deletingId === guest.id ? 'opacity-0 transition-opacity duration-300' : ''}`}
                            >
                                <td className="px-4 py-2">{guest.nombre_apellido}</td>
                                <td className="px-4 py-2">{guest.email}</td>
                                <td className="px-4 py-2">{guest.asistira ? 'Sí' : 'No'}</td>
                                <td className="px-4 py-2">
                                    {guest.restricciones && guest.restricciones.trim().toLowerCase() !== 'no'
                                        ? guest.restricciones
                                        : '—'}
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(guest.id)}
                                        className="text-red-600 hover:text-red-800 transition"
                                        title="Eliminar contacto"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="md:hidden space-y-4">
                {filteredGuests.map((guest) => (
                    <div key={guest.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">{guest.nombre_apellido}</span>
                        </div>
                        <div className="text-sm text-gray-700 mb-2">
                            <strong>Email:</strong> {guest.email}
                        </div>
                        <div className="text-sm text-gray-700 mb-2">
                            <strong>Asistencia:</strong> {guest.asistira ? 'Sí' : 'No'}
                        </div>
                        <div className="text-sm text-gray-700 mb-2">
                            <strong>Restricciones:</strong> {guest.restricciones && guest.restricciones.trim().toLowerCase() !== 'no' ? guest.restricciones : '—'}
                        </div>
                        <button
                            onClick={() => handleDelete(guest.id)}
                            className="text-red-600 hover:text-red-800 transition"
                            title="Eliminar contacto"
                        >
                            <FiTrash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>



    );
}
