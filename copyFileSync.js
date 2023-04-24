import { copyFileSync, constants, rm } from 'node:fs';

function callback(err) {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  }

// destination.txt will be created or overwritten by default.
copyFileSync('source.txt', 'deletedestination.txt');
console.log('source.txt was copied to destination.txt');

rm('deletedestination.txt', callback)
// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
//copyFileSync('source.txt', 'deletedestination.txt', constants.COPYFILE_EXCL);