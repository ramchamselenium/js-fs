import { appendFileSync } from 'node:fs';

try {
  appendFileSync('deletemessage.txt', 'data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  /* Handle the error */
}