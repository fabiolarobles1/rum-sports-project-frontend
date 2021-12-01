import LAI from '../../assets/Logo/lai.jpg'
import UPRM from '../../assets/Pictures/Logos/uprm.png'
import INTER from '../../assets/Pictures/Logos/inter.jpg'
import IUPI from '../../assets/Pictures/Logos/uprrp.png'
import SAGRADO from '../../assets/Pictures/Logos/sagrado.jfif'
import UPRH from '../../assets/Pictures/Logos/uprh.jpg'
import tkdCaampeonas from '../../assets/News/tkd-caampeonas.jpg'
import tkdCaampeones from '../../assets/News/tkd-caampeones.jpg'
import volleyFem from '../../assets/News/volleyballFem.jpg'
export const HomeEvents =[

{
    date:"3-5/12/2021",
    eventName: "Campeonato Piscina Corta",
    imgSrc:LAI,
    eventPlace:"Natatorio SJ",

},
{
    date:"11/12/2021",
    eventName:"Final Volleyball Femenino",
    imgSrc:UPRM,
    eventPlace: "Coliseo Mangual",

},

{
    date:"12/12/2021",
    eventName:"Final Volleyball Masculino",
    imgSrc:IUPI,
    eventPlace:"La Gallera",

},
{
    date:'17/01/2022',
    eventName:"Pre-Eliminar Atletismo",
    imgSrc:INTER,
    eventPlace:"Pista Atletica INTER SG",

},
{
    date:"01/02/2022",
    eventName:"Soccer Femenino",
    imgSrc:SAGRADO,
    eventPlace: "Campo Futbol Sagrado Corazon",

},
{
    date:"03/02/2022",
    eventName:"Partido Baseball",
    imgSrc:UPRH,
    eventPlace:"Parque Doble A Humacao",

},
] ;


export const HomeNews = [
    {
        title:"CAAMpeonas Taekwondo",
        imgSrc:tkdCaampeonas,
        text:"Las Juanas de la Universidad de Puerto Rico Recinto de Mayaguez se proclaman campeonas de la LAI Taekwondo🥋. Obteniendo un total de 4 medallas: 1 oro, 2 platas y 1 bronce. Excelente participación del equipo, vamos por más!",
        colorBackground:false

    },
    {
        title:"Dominio Colegial de las Juanas",
        imgSrc:volleyFem,
        text:"Las Juanas de la Universidad de Puerto Rico Recinto de Mayaguez obtienen su pase a la serie final luego de vencer por la vía rápida al equipo del Recinto de Río Piedras de la UPR en la LAI Voleibol🏐. Vamos a apoyar: ¡EL CO-LE-GIO! ",
        colorBackground:true

    },
    {
        title:"Tercer Lugar en Taekwondo (Masculino)",
        imgSrc:tkdCaampeones,
        text:"Los Tarzanes de la Universidad de Puerto Rico Recinto de Mayaguez se alzaron con la medalla de bronce en la LAI Taekwondo🥋. Obteniendo un total de 3 medallas: 1 plata y 2 bronce. Excelente participación del equipo, vamos por más!",
        colorBackground:false

    }
]