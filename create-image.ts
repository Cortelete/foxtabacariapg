import fs from 'fs';
import https from 'https';

fs.mkdirSync('public', {recursive: true});

const downloadFile = (url: string, dest: string) => {
  return new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  await downloadFile('https://placehold.co/400x400/111111/ff7b00.png?text=FOX', 'public/logo.png');
  await downloadFile('https://placehold.co/400x400/111111/ff7b00.png?text=INIC', 'public/iniciais.png');
  console.log('Images created');
}

main();