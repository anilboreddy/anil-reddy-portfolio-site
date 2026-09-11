import fs from 'node:fs';
import {getDocument, OPS} from 'pdfjs-dist/legacy/build/pdf.mjs';
import {createCanvas} from '@napi-rs/canvas';
fs.mkdirSync('tmp/pdf',{recursive:true});
fs.mkdirSync('assets/photos',{recursive:true});
for(const name of ['cv','portfolio']) {
 const doc=await getDocument({data:new Uint8Array(fs.readFileSync(`assets/anil-reddy-${name}.pdf`)),useSystemFonts:true}).promise;
 for(let n=1;n<=doc.numPages;n++){
  const p=await doc.getPage(n); const text=await p.getTextContent(); console.log(`\n${name} PAGE ${n}\n`,text.items.map(x=>x.str).join(' '));
  const v=p.getViewport({scale:1}); const c=createCanvas(v.width,v.height); await p.render({canvasContext:c.getContext('2d'),viewport:v}).promise; fs.writeFileSync(`tmp/pdf/${name}-${n}.png`,c.toBuffer('image/png'));
  if(name==='portfolio') { const ops=await p.getOperatorList(); let j=0; for(let i=0;i<ops.fnArray.length;i++){if(ops.fnArray[i]!==OPS.paintImageXObject)continue; const im=await new Promise(resolve=>p.objs.get(ops.argsArray[i][0],resolve));if(im.width<180||im.height<150)continue; const out=createCanvas(im.width,im.height),ctx=out.getContext('2d'); if(im.bitmap)ctx.drawImage(im.bitmap,0,0);else {const d=ctx.createImageData(im.width,im.height);for(let k=0;k<im.width*im.height;k++){let channels=im.data.length/(im.width*im.height);d.data[k*4]=im.data[k*channels];d.data[k*4+1]=im.data[k*channels+(channels>1?1:0)];d.data[k*4+2]=im.data[k*channels+(channels>1?2:0)];d.data[k*4+3]=channels===4?im.data[k*4+3]:255;}ctx.putImageData(d,0,0);}const file=`assets/photos/portfolio-${n}-${++j}.jpg`;fs.writeFileSync(file,out.toBuffer('image/jpeg',85));console.log('IMAGE',file,im.width,im.height);}}
 }
}
