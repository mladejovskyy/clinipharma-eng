import { Lato, Open_Sans } from "next/font/google";

import "./globals.css";
import CookieConsentComponent from "@/app/_components/CookieConsent";
import seo from "@/app/seo.config";

const lato = Lato({ subsets: ["latin"], style: ["normal", "italic"], weight: ["300", "400", "700", "900"], variable: "--lato" });
const opensans = Open_Sans({ subsets: ["latin"], style: ["normal", "italic"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--opensans" });

export const metadata = {
    ...seo,
}

export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({children}) {
    return (
        <html lang="cs" className={[lato.variable, opensans.variable].join(" ")} translate="no" suppressHydrationWarning={true}>
        <head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9TJ7FDQWZS"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            `,
                }}
            />
        </head>
        <body>
            <CookieConsentComponent/>
            {children}
        </body>
        </html>
    );
}
