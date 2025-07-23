/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_DOMAIN,
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 5000,
    outDir: './public',
    exclude: ['/admin/*', '/api/*', '/drafts/*', '/preview', '/secret/*', '/_next/', '/images/'],
    changefreq: 'daily',
    priority: 0.7,

    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/_next/', '/images/'],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: ['/images/'],
            },
        ],
    },

    transform: async (config, path) => {
        let priority;

        switch (path) {
            case '/':
                priority = 1.0;
                break;
            case '/products':
                priority = 0.9;
                break;
            case '/downloads':
                priority = 0.9;
                break;
            case '/personal-data-processing':
                priority = 0.1;
                break;
            default:
                priority = 0.7;
                break;
        }

        return {
            loc: path,
            changefreq: 'weekly',
            priority: priority.toFixed(1),
            lastmod: new Date().toISOString(),
        };
    },
};
