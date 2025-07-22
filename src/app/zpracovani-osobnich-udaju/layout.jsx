import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://default-domain.com";
const url = `${domain}zpracovani-osobnich-udaju/`;
export const metadata = {
    ...seoConfig,
    title: "Zpracování osobních údajů | CliniPharma s.r.o",
    description: "Seznamte se s tím, jak společnost CliniPharma zpracovává osobní údaje v souladu s nařízením GDPR. Transparentnost, bezpečnost a ochrana soukromí.",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}