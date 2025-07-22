import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://default-domain.com";
const url = `${domain}produkty/`;
export const metadata = {
    ...seoConfig,
    title: "Produkty | CliniPharma s.r.o",
    description: "Prohlédněte si kompletní nabídku infuzního a zdravotnického vybavení od českého výrobce CliniPharma. Vhodné pro nemocnice, kliniky i distributory.",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}