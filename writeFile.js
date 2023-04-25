import { writeFile, rm } from 'node:fs';
import { Buffer } from 'node:buffer';

function rmcallback(err) {
    if (err) throw err;
    console.log('test rmcallback');
  }

function callback(err) {
    if (err) throw err;
    console.log('test callback');
  }

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('1deletemessage.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

writeFile('2deletemessage.txt', 'Hello Node.js', 'utf8', callback);

const controller = new AbortController();
const { signal } = controller;
writeFile('3deletemessage.txt', data, { signal }, (err) => {
  // When a request is aborted - the callback is called with an AbortError
});
// When the request should be aborted
controller.abort();

rm('1deletemessage.txt', rmcallback)
rm('2deletemessage.txt', rmcallback)
rm('3deletemessage.txt', rmcallback)