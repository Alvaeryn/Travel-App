import fs from 'fs';
import path from 'path';

const folders = ['packages', 'uploads'];

folders.forEach(folder => {
  const dirPath = path.join(__dirname, folder);
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (file.endsWith('.b64')) return;
    const filePath = path.join(dirPath, file);
    if (fs.lstatSync(filePath).isDirectory()) return;

    const content = fs.readFileSync(filePath);
    const base64 = content.toString('base64');
    fs.writeFileSync(`${filePath}.b64`, base64);
    console.log(`Converted: ${file} -> ${file}.b64`);
  });
});
