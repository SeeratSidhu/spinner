const characters = ['|', '/', '-', '\\','|'];
let timer = 100;
let i = 0;

while (i < 2) {
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, timer);
    timer += 200;
  }
  i++;
}

setTimeout(() => {
  console.log("");
}, timer);
