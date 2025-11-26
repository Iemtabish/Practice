const fs = require('fs');

fs.writeFile('practice.txt', 'Learning Node.js file system!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});

fs.readFile('practice.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});


fs.appendFile('practice.txt', '\nAdding more content!', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});
