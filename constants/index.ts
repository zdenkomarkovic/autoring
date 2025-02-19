import { GiWeightLiftingUp } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";

export const navList = [
  {
    title: "Prevoz Mini Bus",
    link: "/",
  },

  {
    title: "Mega Taxi Požega",
    link: "/taxi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već , godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export const vw: string[] = [
  "/minibus/vw.jpg",
  "/minibus/vw (2).jpg",
  "/minibus/vw (6).jpg",
  "/minibus/vw (10).jpg",
  "/minibus/vw (12).jpg",
];

export const mercedes: string[] = [
  "/minibus/mercedes.jpg",
  "/minibus/mercedes (2).jpg",
  "/minibus/mercedes (4).jpg",
  "/minibus/mercedes (6).jpg",
  "/minibus/mercedes (10).jpg",
];

export const bmercedes: string[] = [
  "/minibus/bmercedes.jpg",
  "/minibus/bmercedes (3).jpg",
  "/minibus/bmercedes (4).jpg",
  "/minibus/bmercedes (5).jpg",
  "/minibus/bmercedes (6).jpg",
];

export const reno: string[] = [
  "/minibus/reno.jpg",
  "/minibus/reno (2).jpg",
  "/minibus/reno (4).jpg",
  "/minibus/reno (5).jpg",
  "/minibus/reno (6).jpg",
];

export const cmercedes: string[] = [
  "/minibus/cmercedes.jpg",
  "/minibus/cmercedes (2).jpg",
  "/minibus/cmercedes (3).jpg",
  "/minibus/cmercedes (4).jpg",
  "/minibus/cmercedes (5).jpg",
];

export const merced: string[] = [
  "/minibus/7+1.jpg",
  "/minibus/7+1 (2).jpg",
  "/minibus/7+1 (3).jpg",
  "/minibus/7+1 (5).jpg",
  "/minibus/7+1 (4).jpg",
];

export const bus: string[] = [
  "/minibus/bus.jpg",
  "/minibus/bus (2).jpg",
  "/minibus/bus (3).jpg",
];

export const taxi: string[] = [
  "/taxi/taxi (4).jpg",
  "/taxi/taxi (6).jpg",
  "/taxi/taxi (7).jpg",
  "/taxi/taxi (15).jpg",
  "/taxi/taxi (16).jpg",
  "/taxi/taxi (18).jpg",
  "/taxi/taxi (5).jpg",
  "/taxi/taxi.jpg",
];
