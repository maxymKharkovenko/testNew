const util = require('util');
const { exec } = require('child_process');

const promisifiedExec = util.promisify(exec);

const resetAndExit = message => {
  promisifiedExec('git reset HEAD .')
    .then(() => {
      process.stderr.write(message);
    })
    .then(() => {
      process.exit(1);
    });
};

const checkFile = () => {
  const d = 5;
  if (d > 7) {
    resetAndExit('Error: debugger. Exiting.');
  }
};

checkFile();
