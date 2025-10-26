import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `¿En qué dispositivos puedo usar ${siteDetails.siteName}?`,
        answer: 'Puedes disfrutar de Kaelus TV en Smart TV, smartphones (Android y iOS), tablets, computadoras y cualquier dispositivo compatible con streaming.',
    },
    {
        question: '¿Cuántos dispositivos puedo conectar simultáneamente?',
        answer: 'Dependiendo de tu plan, puedes tener de 1 a 3 dispositivos conectados al mismo tiempo. Todos los planes incluyen acceso al catálogo completo.',
    },
    {
        question: '¿Qué contenido está disponible?',
        answer: 'Tenemos más de 28,000 películas, 6,000 series y 2,000 canales en vivo, incluyendo deportes como UFC, NFL, NBA y mucho más. El contenido se actualiza constantemente.'
    },
    {
        question: '¿Cómo es la calidad del streaming?',
        answer: 'Ofrecemos streaming en alta definición (HD) con conexión estable 24/7. La calidad se adapta automáticamente a tu velocidad de internet.',
    },
    {
        question: '¿Cómo puedo contratar el servicio?',
        answer: 'Es muy sencillo. Solo selecciona el plan que más te convenga y contáctanos para activar tu servicio. Recibirás tus credenciales de acceso inmediatamente después de confirmar tu pago.'
    }
];