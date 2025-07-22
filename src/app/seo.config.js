const title = 'Zdravotnické potřeby a infuzní vybavení | CliniPharma s.r.o';
const description = 'CliniPharma je český výrobce kvalitního infuzního a zdravotnického vybavení pro nemocnice, kliniky i soukromé ordinace. Důraz na inovaci, bezpečnost a spolehlivost.';

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://www.clinipharma.cz';

const seo = {
    metadataBase: new URL(domain),
    title: title,
    description: description,
    applicationName: title,
    generator: 'Next.js',
    keywords: [
        'infuzní vybavení',
        'zdravotnické potřeby',
        'český výrobce',
        'zdravotnický materiál',
        'infuzní sety',
        'zdravotní pomůcky',
        'nemocniční vybavení',
        'CliniPharma',
    ],

    authors: 'CliniPharma s.r.o',
    creator: 'mladejovsky',
    publisher: 'CliniPharma s.r.o',

    openGraph: {
        type: 'website',
        locale: 'cs_CZ',
        url: domain,
        title: title,
        description: description,
        siteName: title,
        images: [
            {
                url: `${domain}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: `${title} – Open Graph Obrázek`,
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        site: '@clinipharma.cz',
        creator: '@clinipharma.cz',
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