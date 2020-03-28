const { exec } = require('child_process');
const opts = { cwd: __dirname };
const cmd = 'diff -qr client/src/shared server/src/shared';

async function run() {
  const a = 3;
  if (a > 2) {
    console.log('succes data');
  } else {
    console.log('you can not commit thi changes becouse file is difference');
    throw "Error2";
  }
}

exec(run, opts, (err, stdout, stderr) => {
  if (err) {
    process.exitCode = 1;
    console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
  }
});
