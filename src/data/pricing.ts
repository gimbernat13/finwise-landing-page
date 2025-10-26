import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Mensual',
        price: 250,
        features: [
            '1 Conexión',
            '28,000 Películas',
            '6,000 Series',
            '2,000 Canales',
        ],
    },
    {
        name: 'Trimestral',
        price: 650,
        features: [
            '3 Conexión',
            '28,000 Películas',
            '6,000 Series',
            '2,000 Canales',
        ],
    },
    {
        name: 'Semestral',
        price: 1200,
        features: [
            '3 Conexión',
            '28,000 Películas',
            '6,000 Series',
            '2,000 Canales',
        ],
    },
    {
        name: 'Anual',
        price: 2200,
        features: [
            '3 Conexión',
            '28,000 Películas',
            '6,000 Series',
            '2,000 Canales',
        ],
    },
]