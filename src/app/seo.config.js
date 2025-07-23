const title = 'Infusion Systems & Medical Equipment – European Manufacturer | CliniPharma s.r.o.';
const description = 'CliniPharma is a European manufacturer of high-quality infusion systems and medical supplies for hospitals, clinics, and healthcare professionals.';

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://www.clinipharma.eu';

const seo = {
    metadataBase: new URL(domain),
    title: title,
    description: description,
    applicationName: title,
    generator: 'Next.js',
    keywords: [
        'infusion systems',
        'medical equipment',
        'hospital supplies',
        'clinical products',
        'B2B medical supplies',
        'CliniPharma'
    ],

    authors: 'CliniPharma s.r.o',
    creator: 'mladejovsky',
    publisher: 'CliniPharma s.r.o',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: domain,
        title: title,
        description: description,
        siteName: title,
        images: [
            {
                url: `${domain}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: `${title} – Open Graph Image`,
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        site: '@clinipharma.eu',
        creator: '@clinipharma.eu',
        images: [`${domain}/og-image.jpg`],
    },

    robots: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: 'large',
        maxVideoPreview: -1,
        nocache: false,
    },

    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon-32x32.png',
    },
};

export default seo;