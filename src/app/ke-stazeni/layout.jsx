import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://default-domain.com";
const url = `${domain}ke-stazeni/`;
export const metadata = {
    ...seoConfig,
    title: "Ke stažení | CliniPharma s.r.o",
    description: "Stáhněte si aktuální návody k použití, seznam vyráběných zdravotnických prostředků a certifikace společnosti CliniPharma.",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}