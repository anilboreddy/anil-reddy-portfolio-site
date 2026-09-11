import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const pages=['index.html','experience.html','ott.html','films.html','gallery.html'];
let references=0;
for(const file of pages){const html=fs.readFileSync(`dist/${file}`,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: one main heading`);assert(html.includes('name="viewport"'));for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=m[1];if(/^(https?:|mailto:|tel:|#)/.test(url))continue;const [local,hash]=url.split('#');assert(fs.existsSync(path.join('dist',local)),`${file}: missing ${local}`);if(hash&&local.endsWith('.html'))assert(fs.readFileSync(path.join('dist',local),'utf8').includes(`id="${hash}"`),`${file}: missing anchor ${url}`);references++;}for(const [url] of pages.map(p=>[p]))assert(html.includes(`href="${url}"`),`${file}: missing navigation ${url}`);}
for(const file of fs.readdirSync('dist/assets/media')){assert(fs.statSync(`dist/assets/media/${file}`).size<25*1024*1024,`Oversized hosting asset: ${file}`);}
console.log(`Validated all 5 pages and ${references} local references. All deployed media under 25 MiB.`);
