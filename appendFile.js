import { appendFile } from 'node:fs';

appendFile('deleteAfterGenerated.txt', 'Delete for data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
