async function run() {
 const a = 3;
 if (a > 4) {
   console.log('succes data');
 } else {
   console.log('you can not commit thi changes becouse file is difference');
   throw "Error2";
 }
}
run();
