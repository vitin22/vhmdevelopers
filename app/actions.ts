"use server"

import { Resend } from 'resend';

// Necesitarás una API Key de resend.com (es gratis)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

 try {
    const { data, error } = await resend.emails.send({
      // CAMBIA ESTO: Ahora puedes usar tu dominio real
      from: 'VHMDevelopers <contacto@vhmdevelopers.com>', 
      to: ['vhmdevelopers@gmail.com'],
      subject: `${subject} - de ${name}`,
      replyTo: email as string,
      text: `Mensaje de: ${name} (${email})\n\n${message}`,
    });

    if (error) {
        console.error("DETALLE DEL ERROR DE RESEND:", error);
        return { success: false, error }};
    return { success: true };
  } catch (e) {
    return { success: false, error: e };
  }
}