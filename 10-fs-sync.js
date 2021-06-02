const fs= require('fs');
const readFileSync= fs.readFileSync;
const writeFileSync= fs.writeFileSync;
console.log('start');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

//this line overwrites to the file
writeFileSync('./content/result-sync.txt', `Here is the result:  ${first},${second}`);

//this will append to the file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result:  ${first},${second}`,
    {flag:'a'}
);
console.log('done with this task');
console.log('starting the next one');