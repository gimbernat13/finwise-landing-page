import { FiTv, FiFilm, FiMonitor } from "react-icons/fi";
import { MdSportsSoccer } from "react-icons/md";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Las mejores Series y Películas",
        description: "Accede a miles de películas y series con contenido actualizado constantemente desde tu dispositivo favorito.",
        bullets: [
            {
                title: "28,000 Películas",
                description: "Desde los clásicos hasta las películas más nuevas",
                icon: <FiFilm size={26} />
            },
            {
                title: "6,000 Series",
                description: "Todas las temporadas de tus series favoritas",
                icon: <FiTv size={26} />
            },
            {
                title: "En cualquier dispositivo",
                description: "Ve en tu Smart TV, teléfono, tablet o computadora",
                icon: <FiMonitor size={26} />
            }
        ],
        imageSrc: "/kaelus/platforms.webp"
    },
    {
        title: "No te pierdas ningún evento deportivo",
        description: "Disfruta de todos los deportes en vivo desde la comodidad de tu casa. Deportes a nivel mundial.",
        bullets: [
            {
                title: "Deportes en Vivo",
                description: "UFC • NFL • NBA • MLB • NHL • Premier League • Champions League • Libertadores • La Liga • Serie A • Bundesliga • Liga MX • MLS • Formula 1 • Boxing • WWE • Tennis • Golf",
                icon: <MdSportsSoccer size={26} />
            }
        ],
        imageSrc: "/kaelus/nfl.jpg"
    },
    {
        title: "La mejor programación de TV en vivo",
        description: "Más de 2,000 canales en vivo con programación variada para toda la familia. Vive una experiencia única de entretenimiento.",
        bullets: [
            {
                title: "2,000 Canales",
                description: "Noticias, deportes, películas, series y más",
                icon: <FiTv size={26} />
            },
            {
                title: "Calidad HD",
                description: "Disfruta contenido en alta definición",
                icon: <FiMonitor size={26} />
            },
            {
                title: "Sin interrupciones",
                description: "Streaming estable y confiable 24/7",
                icon: <FiTv size={26} />
            }
        ],
        imageSrc: "/kaelus/channels.avif"
    },
    {
        title: "Disfruta en cualquier dispositivo",
        description: "Mira tu contenido favorito donde quieras y cuando quieras. Compatible con todos tus dispositivos para una experiencia sin límites.",
        bullets: [
            {
                title: "Smart TV",
                description: "Disfruta en pantalla grande con calidad superior",
                icon: <FiTv size={26} />
            },
            {
                title: "Móvil y Tablet",
                description: "Lleva tu entretenimiento a donde vayas",
                icon: <FiMonitor size={26} />
            },
            {
                title: "Computadora",
                description: "Accede desde cualquier navegador web",
                icon: <FiMonitor size={26} />
            }
        ],
        imageSrc: "/kaelus/anydevice.png"
    },
]