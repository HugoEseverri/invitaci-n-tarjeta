import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { to, nombre } = await req.json()

        const response = await resend.emails.send({
            from: 'invitaciones@resend.dev',
            to,
            subject: 'Confirmación de asistencia',
            html: `
        <p>¡Hola ${nombre}!</p>
        <p>Gracias por responder al formulario de invitación. Tu respuesta ha sido registrada exitosamente.</p>
        <p>Nos vemos pronto 🎉</p>
    `,
        })
        console.log('API KEY:', process.env.RESEND_API_KEY);

        if (response.error) {
            throw new Error(response.error.message)
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error al enviar el correo:', error)
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 })
    }
}
