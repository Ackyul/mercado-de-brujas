const fs = require('fs');
const html = fs.readFileSync('magic.html', 'utf8');

// Find font family references
const fontFamilies = html.match(/font[a-zA-Z-]* font[a-zA-Z-]*|font-family:[^;\"'}]+/gi) || [];
console.log('--- FONT FAMILIES ---');
console.log(Array.from(new Set(fontFamilies)).slice(0, 40));

// Find custom font names / google fonts
const gfonts = html.match(/fonts\.googleapis\.com\/css[^\s\"']+/gi) || [];
console.log('--- GOOGLE FONTS ---');
console.log(Array.from(new Set(gfonts)));

// Find custom font files (ttf, woff, woff2)
const fontFiles = html.match(/https?:\/\/[^\s\"']+\.(ttf|woff|woff2|otf)/gi) || [];
console.log('--- FONT FILES ---');
console.log(Array.from(new Set(fontFiles)));

// Find all SVG vectors or image assets
const svgAndImages = html.match(/https?:\/\/static\.wixstatic\.com\/(media|shapes)[^\s\"']+/gi) || [];
console.log('--- WIX MEDIA / SHAPES (FRAME) ---');
console.log(Array.from(new Set(svgAndImages)).filter(x => x.includes('.svg') || x.includes('png') || x.includes('jpg') || x.includes('vector')).slice(0, 50));
