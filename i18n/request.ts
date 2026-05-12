import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
// i18n/request.ts

export default getRequestConfig(async ({ requestLocale }) => {
    // En Next 16, requestLocale puede venir de una promesa de los params
    const locale = await requestLocale;

    // Validación manual ultra-segura para evitar el error de .length
    const validLocales = ['en', 'es'];
    const finalLocale = (locale && validLocales.includes(locale)) ? locale : 'es';

    try {
        return {
            locale: finalLocale,
            messages: (await import(`../messages/${finalLocale}.json`)).default,
        };
    } catch (error) {
        // Si no encuentra el archivo, devolvemos el default para que no explote
        return {
            locale: 'es',
            messages: (await import(`../messages/es.json`)).default,
        };
    }
});
