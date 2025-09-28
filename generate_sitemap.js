const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://veegee.info';

const DAILY_08 = [
    '/about',
    '/contact',
    '/tnc',
    '/privacy',
]

const WEEKLY_08 = [].flatMap(({ location, options }) =>
    options.length > 0 ? options.map(({ id }) => `/${location}/${id}`) : []
);

const urls = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    ...DAILY_08.map(path => ({
        path,
        priority: 0.8,
        changefreq: 'daily'
    })),
    ...WEEKLY_08.map(path => ({
        path,
        priority: 0.8,
        changefreq: 'weekly'
    })),
];

const today = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ path, priority, changefreq }) => `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>
`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap.trim());

console.log(`✅ Sitemap generated at: ${outputPath}`);
