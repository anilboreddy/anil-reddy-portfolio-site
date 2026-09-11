import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml','.pdf':'application/pdf','.mp4':'video/mp4'};
http.createServer((req,res)=>{
 let file;try{file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));}catch{res.writeHead(400).end();return;}
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 if(file===root||fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404,{'Content-Type':'text/plain'}).end('Page not found');return;}
 const size=fs.statSync(file).size;const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Accept-Ranges':'bytes'};
 const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
 if(range){const start=Number(range[1]),end=range[2]?Math.min(Number(range[2]),size-1):size-1;if(start>=size||start>end){res.writeHead(416,{'Content-Range':`bytes */${size}`}).end();return;}res.writeHead(206,{...headers,'Content-Length':end-start+1,'Content-Range':`bytes ${start}-${end}/${size}`});if(req.method==='HEAD')res.end();else fs.createReadStream(file,{start,end}).pipe(res);}
 else{res.writeHead(200,{...headers,'Content-Length':size});if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);}
}).listen(8080,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:8080'));
