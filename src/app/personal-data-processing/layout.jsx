import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.clinpharma.eu";
const url = `${domain}personal-data-processing/`;
export const metadata = {
    ...seoConfig,
    title: "Personal Data Processing | CliniPharma s.r.o",
    description: "Learn how we process personal data in accordance with the GDPR regulation. Transparency, security, and privacy protection.",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}