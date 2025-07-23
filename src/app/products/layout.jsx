import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.clinipharma.eu";
const url = `${domain}products/`;
export const metadata = {
    ...seoConfig,
    title: "Products | CliniPharma s.r.o",
    description: "Check out the full range of infusion and medical equipment from the Czech manufacturer CliniPharma. Suitable for hospitals, clinics, and distributors.",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}