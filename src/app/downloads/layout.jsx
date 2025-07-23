import seoConfig from '../seo.config';

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.clinpharma.eu";
const url = `${domain}downloads/`;
export const metadata = {
    ...seoConfig,
    title: "Downloads | CliniPharma s.r.o",
    description: "Download the latest user manuals, a list of manufactured medical devices, and certifications from CliniPharma.\n",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
    },
};

export default function Layout({ children }) {
    return children;
}