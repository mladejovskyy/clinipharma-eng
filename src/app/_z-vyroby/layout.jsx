import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://default-domain.com";
const url = `${domain}z-vyroby/`;
export const metadata = {
    ...seoConfig,
    title: "Z výroby | CliniPharma s.r.o",
    description: "Podívejte se do zákulisí výroby infuzních setů a zdravotnického materiálu CliniPharma. Dodržujeme nejpřísnější normy kvality a bezpečnosti.",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}